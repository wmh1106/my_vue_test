import { camelCase, findKey } from 'lodash';
import { common } from '$constants';

const ROUTE_TYPE = {
  FILELIST: 'file_list',
  SUITE: 'suite',
};

/**
 * 请在此配置route信息，及时更新。
 * 若对配置项进行增减，请务必测试各个route的正则判定。
 * @author liaowenhao
 *
 * 关于query的解释：
 *  /doc/token  -> query: true;
 *  /doc/       -> query: false;
 */

const routeList = [
  {
    routeName: 'explorer',
    url: 'folder',
    query: false,
    type: ROUTE_TYPE.FILELIST,
    canOpen: true,
  },
  {
    url: 'folder',
    query: true,
    type: ROUTE_TYPE.FILELIST,
    canOpen: true,
  },
  {
    url: 'share',
    query: false,
    type: ROUTE_TYPE.FILELIST,
    canOpen: true,
  },
  {
    url: 'share/files',
    query: false,
    type: ROUTE_TYPE.FILELIST,
    canOpen: true,
  },
  {
    url: 'share/folders',
    query: false,
    type: ROUTE_TYPE.FILELIST,
    canOpen: true,
  },
  {
    url: 'trash',
    query: false,
    type: ROUTE_TYPE.FILELIST,
    canOpen: false,
  },
  {
    url: 'doc',
    query: true,
    type: ROUTE_TYPE.SUITE,
  },
  {
    url: 'sheet',
    query: true,
    type: ROUTE_TYPE.SUITE,
  },
  {
    url: 'recents',
    query: false,
    type: ROUTE_TYPE.FILELIST,
  }
];

const _cache = {}; // 缓存结果，防止正则计算浪费

const _default = {
  prefix: 'is',
};
/* ================ Helper functions as follow ================= */

/**
 * Helper Function
 * 构造route判定对象的key
 * @param {String} routeName
 * @param {String} url
 * @param {Object} option
 */
function _getKey(routeName, url, option) {
  const _url = routeName || url;
  // Default separtor is '-'
  const { prefix = '', suffix = '', separator = '-' } = option;
  const _key = prefix + separator + _url + separator + suffix;
  return camelCase(_key);
}

/**
 * Helper Function
 * 判断是否匹配当前路径
 * @param {String} url
 * @param {String} query
 */
function _isMatchRoute(url, query, pathname) {
  const _withQuery = '.+';
  const reg = `^/${url}/${query ? _withQuery : ''}$`;
  return new RegExp(reg, 'g').test(pathname);
}

function _getIsRouteMatchEntry(routeConfig, pathname) {
  const { routeName = '', url = '', query = false } = routeConfig;
  if (!url) {
    return null;
  }
  const routeKey = _getKey(routeName, url, {
    prefix: _default.prefix,
  });
  const isRouteMatch = _isMatchRoute(url, query, pathname);
  return { [routeKey]: isRouteMatch };
}

/**
 * Helper Function
 * 遍历routeList，并产生由判定结果组装的key-value pair组成的数组
 * Example: [{isTrash: false}, {isDoc: true}, ...}]
 */
function _getRouteMatchEntryList(pathname) {
  return routeList.map(routeConfig =>
    _getIsRouteMatchEntry(routeConfig, pathname)
  );
}

/**
 * Helper Function
 * 找到当前匹配的Route所对应生成的key
 * Example: { isTrash: false, isDoc: true } => 'isDoc'
 */
function _getCurrentLocationKey() {
  const key = Object.keys(locateRoute()).find(
    key => locateRoute()[key] === true
  );
  const transformedKey = key
    ? key.replace(_default.prefix, '').toUpperCase()
    : '';
  return transformedKey;
}

/**
 * Helper Function
 * 将route判定结果merge进routeList对应信息对象中
 * Example:
 * { routeName: 'explorer', url: 'folder', query: false }
 *                          ↓
 * { isExplorer: true, routeName: 'explorer', url: 'folder', query: false }
 */
// const _getRouteListWithRouteMatch = () => {
//   return routeList.map(routeConfig => {
//     const routeMatchEntry = _getIsRouteMatchEntry(routeConfig);
//     return { ...routeConfig, ...routeMatchEntry };
//   });
// };

/**
 * Helper Function
 * 当前目录配置信息里的类型是否为file-list
 * @param {string} type
 */
const _isTypeOfFileList = ({ type }) => type === ROUTE_TYPE.FILELIST;

/**
 * Helper Function
 * 当前目录配置信息里的类型是否为suite
 * @param {string} type
 */
const _isTypeOfSuite = ({ type }) => type === ROUTE_TYPE.SUITE;

/**
 * Helper Function
 * 当前模流配置信息的类型是否支持打开操作
 * @param {boolean} param0
 */
const _isFileOpenable = ({ canOpen }) => canOpen;

/**
 * Helper Function
 * 判断一组测试函数的结果是否满足特定的条件，如：全部为真，部分为真
 * @param {array} predicates 测试函数组成的数组
 * @param {function} iterateTestMethod 默认为Array.prototype.every
 */
const _mixPredicate = (
  predicates = [],
  iterateTestMethod = Array.prototype.every
) => testVal =>
  iterateTestMethod.call(predicates, predicate => predicate(testVal));

/* ================ Helper functions end ================= */

/**
 * 获取route(location)判定对象
 * @param {Object} pathname
 */

export function locateRoute(pathname = location.pathname) {
  if (pathname in _cache) {
    return _cache[pathname];
  }
  let routeMap = {};
  const routeRstList = _getRouteMatchEntryList(pathname);
  routeMap = routeRstList.reduce(
    (cur, next) => ({ ...cur, ...next }),
    routeMap
  );
  _cache[pathname] = routeMap; // value只可能有一个为true, 请注意判定条件的唯一性
  return routeMap;
}

/**
 * 根据自定义的filterRule来确定当前路径是否满足条件
 * @param {function} predicate
 */
function filterRouteMatch(predicate, locateRouteResult) {
  const rst = locateRouteResult;
  const rootRouteDetectRstArr = routeList
    .filter(val => {
      const rst = predicate(val);
      return rst;
    })
    .map(({ routeName, url }) =>
      _getKey(routeName, url, {
        prefix: _default.prefix,
      })
    )
    .map(rootRouteKey => {
      const rtkey = rst[rootRouteKey];
      return rtkey;
    });
  return rootRouteDetectRstArr.some(isUnderRoute => isUnderRoute === true);
}

/**
 * 是否处于根目录范畴
 */
export function isUnderRootRoute(locateRouteResult = locateRoute()) {
  return filterRouteMatch(({ query }) => !query, locateRouteResult);
}

/**
 * 是否在文件浏览类型目录
 */
export function isUnderFileListView(locateRouteResult = locateRoute()) {
  return filterRouteMatch(_isTypeOfFileList, locateRouteResult);
}

/**
 * 是否在suite路径下
 */
export function isUnderSuiteView(locateRouteResult = locateRoute()) {
  return filterRouteMatch(_isTypeOfSuite, locateRouteResult);
}

/**
 * 是否在可打开文件浏览目录
 */
export function isUnderOpenableListView(locateRouteResult = locateRoute()) {
  const mixedPredicate = _mixPredicate([_isTypeOfFileList, _isFileOpenable]);
  const result = filterRouteMatch(mixedPredicate, locateRouteResult);
  return result;
}

/**
 * 在不接入react-router的withRouter时判定当前base_path
 */
export function getPath() {
  let _url;
  const path = window.location.pathname;
  const result = path.match(/^\/(.+)?\//);
  if (result) {
    _url = result[1];
  }
  const urlWithSlash = `/${_url}/`; // React-Router里的path是带'/'的
  return urlWithSlash;
}

/**
 * 获取根目录范畴下的当前目录对应type(Number)
 */
export function rootRouteTypeNum() {
  const transfromedKey = _getCurrentLocationKey();
  return common.NUM_ROOT_META[transfromedKey];
}

/**
 * 根据传入的map来获取当前location所对应的值
 * @param {Object} map
 */
export function mapCurrentLocationTo(map) {
  const transfromedKey = _getCurrentLocationKey();
  return map[transfromedKey] || '';
}

/**
 * 根据提供的token/obj_token和type生成地址
 * @param {Number} type
 * @param {String} targetToken
 */
export function generatePath({ type, objToken = '', token = '' }) {
  const SLASH = '/';
  const realTarget = objToken || token;
  return SLASH + common.FILE_TYPE_URL_MAP[type] + SLASH + realTarget;
}

export function getSuiteType() {
  if (!isUnderSuiteView()) return -1;
  const locateRouteRst = locateRoute();
  const currentRouteKey = findKey(locateRouteRst, val => val === true);
  return currentRouteKey
    ? common.FILE_TYPE[currentRouteKey.replace('is', '').toUpperCase()]
    : -1;
}
