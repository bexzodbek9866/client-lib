/**
* @vue/shared v3.5.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Gs(t) {
  const e = /* @__PURE__ */ Object.create(null);
  for (const n of t.split(",")) e[n] = 1;
  return (n) => n in e;
}
const Bt = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, Qs = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], Mt = () => {
}, Xs = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // uppercase letter
(t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97), K = Object.assign, Zs = (t, e) => {
  const n = t.indexOf(e);
  n > -1 && t.splice(n, 1);
}, to = Object.prototype.hasOwnProperty, we = (t, e) => to.call(t, e), D = Array.isArray, Dt = (t) => pe(t) === "[object Map]", Kt = (t) => pe(t) === "[object Set]", Cn = (t) => pe(t) === "[object Date]", $ = (t) => typeof t == "function", Z = (t) => typeof t == "string", at = (t) => typeof t == "symbol", I = (t) => t !== null && typeof t == "object", eo = (t) => (I(t) || $(t)) && $(t.then) && $(t.catch), Zn = Object.prototype.toString, pe = (t) => Zn.call(t), ts = (t) => pe(t).slice(8, -1), es = (t) => pe(t) === "[object Object]", fn = (t) => Z(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t, pn = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return ((n) => e[n] || (e[n] = t(n)));
}, no = /-(\w)/g, Oe = pn(
  (t) => t.replace(no, (e, n) => n ? n.toUpperCase() : "")
), ie = pn((t) => t.charAt(0).toUpperCase() + t.slice(1)), so = pn(
  (t) => t ? `on${ie(t)}` : ""
), Et = (t, e) => !Object.is(t, e), oo = (t, ...e) => {
  for (let n = 0; n < t.length; n++)
    t[n](...e);
}, io = (t, e, n, s = !1) => {
  Object.defineProperty(t, e, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, tn = (t) => {
  const e = parseFloat(t);
  return isNaN(e) ? t : e;
};
let Vn;
const je = () => Vn || (Vn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function qe(t) {
  if (D(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++) {
      const s = t[n], o = Z(s) ? co(s) : qe(s);
      if (o)
        for (const i in o)
          e[i] = o[i];
    }
    return e;
  } else if (Z(t) || I(t))
    return t;
}
const ro = /;(?![^(]*\))/g, ao = /:([^]+)/, lo = /\/\*[^]*?\*\//g;
function co(t) {
  const e = {};
  return t.replace(lo, "").split(ro).forEach((n) => {
    if (n) {
      const s = n.split(ao);
      s.length > 1 && (e[s[0].trim()] = s[1].trim());
    }
  }), e;
}
function Nt(t) {
  let e = "";
  if (Z(t))
    e = t;
  else if (D(t))
    for (let n = 0; n < t.length; n++) {
      const s = Nt(t[n]);
      s && (e += s + " ");
    }
  else if (I(t))
    for (const n in t)
      t[n] && (e += n + " ");
  return e.trim();
}
function uo(t, e) {
  if (t.length !== e.length) return !1;
  let n = !0;
  for (let s = 0; n && s < t.length; s++)
    n = he(t[s], e[s]);
  return n;
}
function he(t, e) {
  if (t === e) return !0;
  let n = Cn(t), s = Cn(e);
  if (n || s)
    return n && s ? t.getTime() === e.getTime() : !1;
  if (n = at(t), s = at(e), n || s)
    return t === e;
  if (n = D(t), s = D(e), n || s)
    return n && s ? uo(t, e) : !1;
  if (n = I(t), s = I(e), n || s) {
    if (!n || !s)
      return !1;
    const o = Object.keys(t).length, i = Object.keys(e).length;
    if (o !== i)
      return !1;
    for (const r in t) {
      const a = t.hasOwnProperty(r), u = e.hasOwnProperty(r);
      if (a && !u || !a && u || !he(t[r], e[r]))
        return !1;
    }
  }
  return String(t) === String(e);
}
function hn(t, e) {
  return t.findIndex((n) => he(n, e));
}
const ns = (t) => !!(t && t.__v_isRef === !0), C = (t) => Z(t) ? t : t == null ? "" : D(t) || I(t) && (t.toString === Zn || !$(t.toString)) ? ns(t) ? C(t.value) : JSON.stringify(t, ss, 2) : String(t), ss = (t, e) => ns(e) ? ss(t, e.value) : Dt(e) ? {
  [`Map(${e.size})`]: [...e.entries()].reduce(
    (n, [s, o], i) => (n[He(s, i) + " =>"] = o, n),
    {}
  )
} : Kt(e) ? {
  [`Set(${e.size})`]: [...e.values()].map((n) => He(n))
} : at(e) ? He(e) : I(e) && !D(e) && !es(e) ? String(e) : e, He = (t, e = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    at(t) ? `Symbol(${(n = t.description) != null ? n : e})` : t
  );
};
/**
* @vue/reactivity v3.5.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Y(t, ...e) {
  console.warn(`[Vue warn] ${t}`, ...e);
}
let A;
class fo {
  constructor(e = !1) {
    this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = A, !e && A && (this.index = (A.scopes || (A.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let e, n;
      if (this.scopes)
        for (e = 0, n = this.scopes.length; e < n; e++)
          this.scopes[e].pause();
      for (e = 0, n = this.effects.length; e < n; e++)
        this.effects[e].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let e, n;
      if (this.scopes)
        for (e = 0, n = this.scopes.length; e < n; e++)
          this.scopes[e].resume();
      for (e = 0, n = this.effects.length; e < n; e++)
        this.effects[e].resume();
    }
  }
  run(e) {
    if (this._active) {
      const n = A;
      try {
        return A = this, e();
      } finally {
        A = n;
      }
    } else process.env.NODE_ENV !== "production" && Y("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = A, A = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (A = this.prevScope, this.prevScope = void 0);
  }
  stop(e) {
    if (this._active) {
      this._active = !1;
      let n, s;
      for (n = 0, s = this.effects.length; n < s; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, s = this.cleanups.length; n < s; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, s = this.scopes.length; n < s; n++)
          this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !e) {
        const o = this.parent.scopes.pop();
        o && o !== this && (this.parent.scopes[this.index] = o, o.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function po(t) {
  return new fo(t);
}
function os() {
  return A;
}
function ho(t, e = !1) {
  A ? A.cleanups.push(t) : process.env.NODE_ENV !== "production" && !e && Y(
    "onScopeDispose() is called when there is no active effect scope to be associated with."
  );
}
let V;
const Fe = /* @__PURE__ */ new WeakSet();
class mo {
  constructor(e) {
    this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, A && A.active && A.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Fe.has(this) && (Fe.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || rs(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, $n(this), as(this);
    const e = V, n = ot;
    V = this, ot = !0;
    try {
      return this.fn();
    } finally {
      process.env.NODE_ENV !== "production" && V !== this && Y(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), ls(this), V = e, ot = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let e = this.deps; e; e = e.nextDep)
        gn(e);
      this.deps = this.depsTail = void 0, $n(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Fe.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    en(this) && this.run();
  }
  get dirty() {
    return en(this);
  }
}
let is = 0, ne, se;
function rs(t, e = !1) {
  if (t.flags |= 8, e) {
    t.next = se, se = t;
    return;
  }
  t.next = ne, ne = t;
}
function mn() {
  is++;
}
function vn() {
  if (--is > 0)
    return;
  if (se) {
    let e = se;
    for (se = void 0; e; ) {
      const n = e.next;
      e.next = void 0, e.flags &= -9, e = n;
    }
  }
  let t;
  for (; ne; ) {
    let e = ne;
    for (ne = void 0; e; ) {
      const n = e.next;
      if (e.next = void 0, e.flags &= -9, e.flags & 1)
        try {
          e.trigger();
        } catch (s) {
          t || (t = s);
        }
      e = n;
    }
  }
  if (t) throw t;
}
function as(t) {
  for (let e = t.deps; e; e = e.nextDep)
    e.version = -1, e.prevActiveLink = e.dep.activeLink, e.dep.activeLink = e;
}
function ls(t) {
  let e, n = t.depsTail, s = n;
  for (; s; ) {
    const o = s.prevDep;
    s.version === -1 ? (s === n && (n = o), gn(s), vo(s)) : e = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = o;
  }
  t.deps = e, t.depsTail = n;
}
function en(t) {
  for (let e = t.deps; e; e = e.nextDep)
    if (e.dep.version !== e.version || e.dep.computed && (cs(e.dep.computed) || e.dep.version !== e.version))
      return !0;
  return !!t._dirty;
}
function cs(t) {
  if (t.flags & 4 && !(t.flags & 16) || (t.flags &= -17, t.globalVersion === re) || (t.globalVersion = re, !t.isSSR && t.flags & 128 && (!t.deps && !t._dirty || !en(t))))
    return;
  t.flags |= 2;
  const e = t.dep, n = V, s = ot;
  V = t, ot = !0;
  try {
    as(t);
    const o = t.fn(t._value);
    (e.version === 0 || Et(o, t._value)) && (t.flags |= 128, t._value = o, e.version++);
  } catch (o) {
    throw e.version++, o;
  } finally {
    V = n, ot = s, ls(t), t.flags &= -3;
  }
}
function gn(t, e = !1) {
  const { dep: n, prevSub: s, nextSub: o } = t;
  if (s && (s.nextSub = o, t.prevSub = void 0), o && (o.prevSub = s, t.nextSub = void 0), process.env.NODE_ENV !== "production" && n.subsHead === t && (n.subsHead = o), n.subs === t && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep)
      gn(i, !0);
  }
  !e && !--n.sc && n.map && n.map.delete(n.key);
}
function vo(t) {
  const { prevDep: e, nextDep: n } = t;
  e && (e.nextDep = n, t.prevDep = void 0), n && (n.prevDep = e, t.nextDep = void 0);
}
let ot = !0;
const us = [];
function Lt() {
  us.push(ot), ot = !1;
}
function Wt() {
  const t = us.pop();
  ot = t === void 0 ? !0 : t;
}
function $n(t) {
  const { cleanup: e } = t;
  if (t.cleanup = void 0, e) {
    const n = V;
    V = void 0;
    try {
      e();
    } finally {
      V = n;
    }
  }
}
let re = 0;
class go {
  constructor(e, n) {
    this.sub = e, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class _n {
  // TODO isolatedDeclarations "__v_skip"
  constructor(e) {
    this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0, process.env.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(e) {
    if (!V || !ot || V === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== V)
      n = this.activeLink = new go(V, this), V.deps ? (n.prevDep = V.depsTail, V.depsTail.nextDep = n, V.depsTail = n) : V.deps = V.depsTail = n, ds(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = V.depsTail, n.nextDep = void 0, V.depsTail.nextDep = n, V.depsTail = n, V.deps === n && (V.deps = s);
    }
    return process.env.NODE_ENV !== "production" && V.onTrack && V.onTrack(
      K(
        {
          effect: V
        },
        e
      )
    ), n;
  }
  trigger(e) {
    this.version++, re++, this.notify(e);
  }
  notify(e) {
    mn();
    try {
      if (process.env.NODE_ENV !== "production")
        for (let n = this.subsHead; n; n = n.nextSub)
          n.sub.onTrigger && !(n.sub.flags & 8) && n.sub.onTrigger(
            K(
              {
                effect: n.sub
              },
              e
            )
          );
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      vn();
    }
  }
}
function ds(t) {
  if (t.dep.sc++, t.sub.flags & 4) {
    const e = t.dep.computed;
    if (e && !t.dep.subs) {
      e.flags |= 20;
      for (let s = e.deps; s; s = s.nextDep)
        ds(s);
    }
    const n = t.dep.subs;
    n !== t && (t.prevSub = n, n && (n.nextSub = t)), process.env.NODE_ENV !== "production" && t.dep.subsHead === void 0 && (t.dep.subsHead = t), t.dep.subs = t;
  }
}
const Se = /* @__PURE__ */ new WeakMap(), kt = Symbol(
  process.env.NODE_ENV !== "production" ? "Object iterate" : ""
), nn = Symbol(
  process.env.NODE_ENV !== "production" ? "Map keys iterate" : ""
), ae = Symbol(
  process.env.NODE_ENV !== "production" ? "Array iterate" : ""
);
function U(t, e, n) {
  if (ot && V) {
    let s = Se.get(t);
    s || Se.set(t, s = /* @__PURE__ */ new Map());
    let o = s.get(n);
    o || (s.set(n, o = new _n()), o.map = s, o.key = n), process.env.NODE_ENV !== "production" ? o.track({
      target: t,
      type: e,
      key: n
    }) : o.track();
  }
}
function _t(t, e, n, s, o, i) {
  const r = Se.get(t);
  if (!r) {
    re++;
    return;
  }
  const a = (u) => {
    u && (process.env.NODE_ENV !== "production" ? u.trigger({
      target: t,
      type: e,
      key: n,
      newValue: s,
      oldValue: o,
      oldTarget: i
    }) : u.trigger());
  };
  if (mn(), e === "clear")
    r.forEach(a);
  else {
    const u = D(t), m = u && fn(n);
    if (u && n === "length") {
      const h = Number(s);
      r.forEach((c, f) => {
        (f === "length" || f === ae || !at(f) && f >= h) && a(c);
      });
    } else
      switch ((n !== void 0 || r.has(void 0)) && a(r.get(n)), m && a(r.get(ae)), e) {
        case "add":
          u ? m && a(r.get("length")) : (a(r.get(kt)), Dt(t) && a(r.get(nn)));
          break;
        case "delete":
          u || (a(r.get(kt)), Dt(t) && a(r.get(nn)));
          break;
        case "set":
          Dt(t) && a(r.get(kt));
          break;
      }
  }
  vn();
}
function _o(t, e) {
  const n = Se.get(t);
  return n && n.get(e);
}
function Tt(t) {
  const e = O(t);
  return e === t ? e : (U(e, "iterate", ae), F(t) ? e : e.map(j));
}
function Me(t) {
  return U(t = O(t), "iterate", ae), t;
}
const yo = {
  __proto__: null,
  [Symbol.iterator]() {
    return Ue(this, Symbol.iterator, j);
  },
  concat(...t) {
    return Tt(this).concat(
      ...t.map((e) => D(e) ? Tt(e) : e)
    );
  },
  entries() {
    return Ue(this, "entries", (t) => (t[1] = j(t[1]), t));
  },
  every(t, e) {
    return ft(this, "every", t, e, void 0, arguments);
  },
  filter(t, e) {
    return ft(this, "filter", t, e, (n) => n.map(j), arguments);
  },
  find(t, e) {
    return ft(this, "find", t, e, j, arguments);
  },
  findIndex(t, e) {
    return ft(this, "findIndex", t, e, void 0, arguments);
  },
  findLast(t, e) {
    return ft(this, "findLast", t, e, j, arguments);
  },
  findLastIndex(t, e) {
    return ft(this, "findLastIndex", t, e, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(t, e) {
    return ft(this, "forEach", t, e, void 0, arguments);
  },
  includes(...t) {
    return Ke(this, "includes", t);
  },
  indexOf(...t) {
    return Ke(this, "indexOf", t);
  },
  join(t) {
    return Tt(this).join(t);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...t) {
    return Ke(this, "lastIndexOf", t);
  },
  map(t, e) {
    return ft(this, "map", t, e, void 0, arguments);
  },
  pop() {
    return Qt(this, "pop");
  },
  push(...t) {
    return Qt(this, "push", t);
  },
  reduce(t, ...e) {
    return xn(this, "reduce", t, e);
  },
  reduceRight(t, ...e) {
    return xn(this, "reduceRight", t, e);
  },
  shift() {
    return Qt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(t, e) {
    return ft(this, "some", t, e, void 0, arguments);
  },
  splice(...t) {
    return Qt(this, "splice", t);
  },
  toReversed() {
    return Tt(this).toReversed();
  },
  toSorted(t) {
    return Tt(this).toSorted(t);
  },
  toSpliced(...t) {
    return Tt(this).toSpliced(...t);
  },
  unshift(...t) {
    return Qt(this, "unshift", t);
  },
  values() {
    return Ue(this, "values", j);
  }
};
function Ue(t, e, n) {
  const s = Me(t), o = s[e]();
  return s !== t && !F(t) && (o._next = o.next, o.next = () => {
    const i = o._next();
    return i.value && (i.value = n(i.value)), i;
  }), o;
}
const bo = Array.prototype;
function ft(t, e, n, s, o, i) {
  const r = Me(t), a = r !== t && !F(t), u = r[e];
  if (u !== bo[e]) {
    const c = u.apply(t, i);
    return a ? j(c) : c;
  }
  let m = n;
  r !== t && (a ? m = function(c, f) {
    return n.call(this, j(c), f, t);
  } : n.length > 2 && (m = function(c, f) {
    return n.call(this, c, f, t);
  }));
  const h = u.call(r, m, s);
  return a && o ? o(h) : h;
}
function xn(t, e, n, s) {
  const o = Me(t);
  let i = n;
  return o !== t && (F(t) ? n.length > 3 && (i = function(r, a, u) {
    return n.call(this, r, a, u, t);
  }) : i = function(r, a, u) {
    return n.call(this, r, j(a), u, t);
  }), o[e](i, ...s);
}
function Ke(t, e, n) {
  const s = O(t);
  U(s, "iterate", ae);
  const o = s[e](...n);
  return (o === -1 || o === !1) && le(n[0]) ? (n[0] = O(n[0]), s[e](...n)) : o;
}
function Qt(t, e, n = []) {
  Lt(), mn();
  const s = O(t)[e].apply(t, n);
  return vn(), Wt(), s;
}
const Eo = /* @__PURE__ */ Gs("__proto__,__v_isRef,__isVue"), fs = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((t) => t !== "arguments" && t !== "caller").map((t) => Symbol[t]).filter(at)
);
function No(t) {
  at(t) || (t = String(t));
  const e = O(this);
  return U(e, "has", t), e.hasOwnProperty(t);
}
class ps {
  constructor(e = !1, n = !1) {
    this._isReadonly = e, this._isShallow = n;
  }
  get(e, n, s) {
    if (n === "__v_skip") return e.__v_skip;
    const o = this._isReadonly, i = this._isShallow;
    if (n === "__v_isReactive")
      return !o;
    if (n === "__v_isReadonly")
      return o;
    if (n === "__v_isShallow")
      return i;
    if (n === "__v_raw")
      return s === (o ? i ? gs : vs : i ? Po : ms).get(e) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(e) === Object.getPrototypeOf(s) ? e : void 0;
    const r = D(e);
    if (!o) {
      let u;
      if (r && (u = yo[n]))
        return u;
      if (n === "hasOwnProperty")
        return No;
    }
    const a = Reflect.get(
      e,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      T(e) ? e : s
    );
    return (at(n) ? fs.has(n) : Eo(n)) || (o || U(e, "get", n), i) ? a : T(a) ? r && fn(n) ? a : a.value : I(a) ? o ? _s(a) : Ht(a) : a;
  }
}
class wo extends ps {
  constructor(e = !1) {
    super(!1, e);
  }
  set(e, n, s, o) {
    let i = e[n];
    if (!this._isShallow) {
      const u = lt(i);
      if (!F(s) && !lt(s) && (i = O(i), s = O(s)), !D(e) && T(i) && !T(s))
        return u ? (process.env.NODE_ENV !== "production" && Y(
          `Set operation on key "${String(n)}" failed: target is readonly.`,
          e[n]
        ), !0) : (i.value = s, !0);
    }
    const r = D(e) && fn(n) ? Number(n) < e.length : we(e, n), a = Reflect.set(
      e,
      n,
      s,
      T(e) ? e : o
    );
    return e === O(o) && (r ? Et(s, i) && _t(e, "set", n, s, i) : _t(e, "add", n, s)), a;
  }
  deleteProperty(e, n) {
    const s = we(e, n), o = e[n], i = Reflect.deleteProperty(e, n);
    return i && s && _t(e, "delete", n, void 0, o), i;
  }
  has(e, n) {
    const s = Reflect.has(e, n);
    return (!at(n) || !fs.has(n)) && U(e, "has", n), s;
  }
  ownKeys(e) {
    return U(
      e,
      "iterate",
      D(e) ? "length" : kt
    ), Reflect.ownKeys(e);
  }
}
class hs extends ps {
  constructor(e = !1) {
    super(!0, e);
  }
  set(e, n) {
    return process.env.NODE_ENV !== "production" && Y(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      e
    ), !0;
  }
  deleteProperty(e, n) {
    return process.env.NODE_ENV !== "production" && Y(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      e
    ), !0;
  }
}
const Oo = /* @__PURE__ */ new wo(), So = /* @__PURE__ */ new hs(), Do = /* @__PURE__ */ new hs(!0), sn = (t) => t, ve = (t) => Reflect.getPrototypeOf(t);
function ko(t, e, n) {
  return function(...s) {
    const o = this.__v_raw, i = O(o), r = Dt(i), a = t === "entries" || t === Symbol.iterator && r, u = t === "keys" && r, m = o[t](...s), h = n ? sn : e ? De : j;
    return !e && U(
      i,
      "iterate",
      u ? nn : kt
    ), {
      // iterator protocol
      next() {
        const { value: c, done: f } = m.next();
        return f ? { value: c, done: f } : {
          value: a ? [h(c[0]), h(c[1])] : h(c),
          done: f
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function ge(t) {
  return function(...e) {
    if (process.env.NODE_ENV !== "production") {
      const n = e[0] ? `on key "${e[0]}" ` : "";
      Y(
        `${ie(t)} operation ${n}failed: target is readonly.`,
        O(this)
      );
    }
    return t === "delete" ? !1 : t === "clear" ? void 0 : this;
  };
}
function Co(t, e) {
  const n = {
    get(o) {
      const i = this.__v_raw, r = O(i), a = O(o);
      t || (Et(o, a) && U(r, "get", o), U(r, "get", a));
      const { has: u } = ve(r), m = e ? sn : t ? De : j;
      if (u.call(r, o))
        return m(i.get(o));
      if (u.call(r, a))
        return m(i.get(a));
      i !== r && i.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !t && U(O(o), "iterate", kt), Reflect.get(o, "size", o);
    },
    has(o) {
      const i = this.__v_raw, r = O(i), a = O(o);
      return t || (Et(o, a) && U(r, "has", o), U(r, "has", a)), o === a ? i.has(o) : i.has(o) || i.has(a);
    },
    forEach(o, i) {
      const r = this, a = r.__v_raw, u = O(a), m = e ? sn : t ? De : j;
      return !t && U(u, "iterate", kt), a.forEach((h, c) => o.call(i, m(h), m(c), r));
    }
  };
  return K(
    n,
    t ? {
      add: ge("add"),
      set: ge("set"),
      delete: ge("delete"),
      clear: ge("clear")
    } : {
      add(o) {
        !e && !F(o) && !lt(o) && (o = O(o));
        const i = O(this);
        return ve(i).has.call(i, o) || (i.add(o), _t(i, "add", o, o)), this;
      },
      set(o, i) {
        !e && !F(i) && !lt(i) && (i = O(i));
        const r = O(this), { has: a, get: u } = ve(r);
        let m = a.call(r, o);
        m ? process.env.NODE_ENV !== "production" && Pn(r, a, o) : (o = O(o), m = a.call(r, o));
        const h = u.call(r, o);
        return r.set(o, i), m ? Et(i, h) && _t(r, "set", o, i, h) : _t(r, "add", o, i), this;
      },
      delete(o) {
        const i = O(this), { has: r, get: a } = ve(i);
        let u = r.call(i, o);
        u ? process.env.NODE_ENV !== "production" && Pn(i, r, o) : (o = O(o), u = r.call(i, o));
        const m = a ? a.call(i, o) : void 0, h = i.delete(o);
        return u && _t(i, "delete", o, void 0, m), h;
      },
      clear() {
        const o = O(this), i = o.size !== 0, r = process.env.NODE_ENV !== "production" ? Dt(o) ? new Map(o) : new Set(o) : void 0, a = o.clear();
        return i && _t(
          o,
          "clear",
          void 0,
          void 0,
          r
        ), a;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((o) => {
    n[o] = ko(o, t, e);
  }), n;
}
function yn(t, e) {
  const n = Co(t, e);
  return (s, o, i) => o === "__v_isReactive" ? !t : o === "__v_isReadonly" ? t : o === "__v_raw" ? s : Reflect.get(
    we(n, o) && o in s ? n : s,
    o,
    i
  );
}
const Vo = {
  get: /* @__PURE__ */ yn(!1, !1)
}, $o = {
  get: /* @__PURE__ */ yn(!0, !1)
}, xo = {
  get: /* @__PURE__ */ yn(!0, !0)
};
function Pn(t, e, n) {
  const s = O(n);
  if (s !== n && e.call(t, s)) {
    const o = ts(t);
    Y(
      `Reactive ${o} contains both the raw and reactive versions of the same object${o === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const ms = /* @__PURE__ */ new WeakMap(), Po = /* @__PURE__ */ new WeakMap(), vs = /* @__PURE__ */ new WeakMap(), gs = /* @__PURE__ */ new WeakMap();
function To(t) {
  switch (t) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Ro(t) {
  return t.__v_skip || !Object.isExtensible(t) ? 0 : To(ts(t));
}
function Ht(t) {
  return lt(t) ? t : bn(
    t,
    !1,
    Oo,
    Vo,
    ms
  );
}
function _s(t) {
  return bn(
    t,
    !0,
    So,
    $o,
    vs
  );
}
function _e(t) {
  return bn(
    t,
    !0,
    Do,
    xo,
    gs
  );
}
function bn(t, e, n, s, o) {
  if (!I(t))
    return process.env.NODE_ENV !== "production" && Y(
      `value cannot be made ${e ? "readonly" : "reactive"}: ${String(
        t
      )}`
    ), t;
  if (t.__v_raw && !(e && t.__v_isReactive))
    return t;
  const i = Ro(t);
  if (i === 0)
    return t;
  const r = o.get(t);
  if (r)
    return r;
  const a = new Proxy(
    t,
    i === 2 ? s : n
  );
  return o.set(t, a), a;
}
function rt(t) {
  return lt(t) ? rt(t.__v_raw) : !!(t && t.__v_isReactive);
}
function lt(t) {
  return !!(t && t.__v_isReadonly);
}
function F(t) {
  return !!(t && t.__v_isShallow);
}
function le(t) {
  return t ? !!t.__v_raw : !1;
}
function O(t) {
  const e = t && t.__v_raw;
  return e ? O(e) : t;
}
function qt(t) {
  return !we(t, "__v_skip") && Object.isExtensible(t) && io(t, "__v_skip", !0), t;
}
const j = (t) => I(t) ? Ht(t) : t, De = (t) => I(t) ? _s(t) : t;
function T(t) {
  return t ? t.__v_isRef === !0 : !1;
}
function z(t) {
  return Io(t, !1);
}
function Io(t, e) {
  return T(t) ? t : new jo(t, e);
}
class jo {
  constructor(e, n) {
    this.dep = new _n(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? e : O(e), this._value = n ? e : j(e), this.__v_isShallow = n;
  }
  get value() {
    return process.env.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track(), this._value;
  }
  set value(e) {
    const n = this._rawValue, s = this.__v_isShallow || F(e) || lt(e);
    e = s ? e : O(e), Et(e, n) && (this._rawValue = e, this._value = s ? e : j(e), process.env.NODE_ENV !== "production" ? this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: e,
      oldValue: n
    }) : this.dep.trigger());
  }
}
function w(t) {
  return T(t) ? t.value : t;
}
const qo = {
  get: (t, e, n) => e === "__v_raw" ? t : w(Reflect.get(t, e, n)),
  set: (t, e, n, s) => {
    const o = t[e];
    return T(o) && !T(n) ? (o.value = n, !0) : Reflect.set(t, e, n, s);
  }
};
function Mo(t) {
  return rt(t) ? t : new Proxy(t, qo);
}
function Tn(t) {
  process.env.NODE_ENV !== "production" && !le(t) && Y("toRefs() expects a reactive object but received a plain one.");
  const e = D(t) ? new Array(t.length) : {};
  for (const n in t)
    e[n] = ys(t, n);
  return e;
}
class Ao {
  constructor(e, n, s) {
    this._object = e, this._key = n, this._defaultValue = s, this.__v_isRef = !0, this._value = void 0;
  }
  get value() {
    const e = this._object[this._key];
    return this._value = e === void 0 ? this._defaultValue : e;
  }
  set value(e) {
    this._object[this._key] = e;
  }
  get dep() {
    return _o(O(this._object), this._key);
  }
}
class zo {
  constructor(e) {
    this._getter = e, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
  }
  get value() {
    return this._value = this._getter();
  }
}
function Le(t, e, n) {
  return T(t) ? t : $(t) ? new zo(t) : I(t) && arguments.length > 1 ? ys(t, e, n) : z(t);
}
function ys(t, e, n) {
  const s = t[e];
  return T(s) ? s : new Ao(t, e, n);
}
class Bo {
  constructor(e, n, s) {
    this.fn = e, this.setter = n, this._value = void 0, this.dep = new _n(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = re - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    V !== this)
      return rs(this, !0), !0;
    process.env.NODE_ENV;
  }
  get value() {
    const e = process.env.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return cs(this), e && (e.version = this.dep.version), this._value;
  }
  set value(e) {
    this.setter ? this.setter(e) : process.env.NODE_ENV !== "production" && Y("Write operation failed: computed value is readonly");
  }
}
function Ho(t, e, n = !1) {
  let s, o;
  $(t) ? s = t : (s = t.get, o = t.set);
  const i = new Bo(s, o, n);
  return process.env.NODE_ENV, i;
}
const ye = {}, ke = /* @__PURE__ */ new WeakMap();
let wt;
function Fo(t, e = !1, n = wt) {
  if (n) {
    let s = ke.get(n);
    s || ke.set(n, s = []), s.push(t);
  } else process.env.NODE_ENV !== "production" && !e && Y(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function Uo(t, e, n = Bt) {
  const { immediate: s, deep: o, once: i, scheduler: r, augmentJob: a, call: u } = n, m = (E) => {
    (n.onWarn || Y)(
      "Invalid watch source: ",
      E,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, h = (E) => o ? E : F(E) || o === !1 || o === 0 ? ht(E, 1) : ht(E);
  let c, f, d, p, k = !1, ct = !1;
  if (T(t) ? (f = () => t.value, k = F(t)) : rt(t) ? (f = () => h(t), k = !0) : D(t) ? (ct = !0, k = t.some((E) => rt(E) || F(E)), f = () => t.map((E) => {
    if (T(E))
      return E.value;
    if (rt(E))
      return h(E);
    if ($(E))
      return u ? u(E, 2) : E();
    process.env.NODE_ENV !== "production" && m(E);
  })) : $(t) ? e ? f = u ? () => u(t, 2) : t : f = () => {
    if (d) {
      Lt();
      try {
        d();
      } finally {
        Wt();
      }
    }
    const E = wt;
    wt = c;
    try {
      return u ? u(t, 3, [p]) : t(p);
    } finally {
      wt = E;
    }
  } : (f = Mt, process.env.NODE_ENV !== "production" && m(t)), e && o) {
    const E = f, B = o === !0 ? 1 / 0 : o;
    f = () => ht(E(), B);
  }
  const ut = os(), it = () => {
    c.stop(), ut && ut.active && Zs(ut.effects, c);
  };
  if (i && e) {
    const E = e;
    e = (...B) => {
      E(...B), it();
    };
  }
  let et = ct ? new Array(t.length).fill(ye) : ye;
  const nt = (E) => {
    if (!(!(c.flags & 1) || !c.dirty && !E))
      if (e) {
        const B = c.run();
        if (o || k || (ct ? B.some((y, dt) => Et(y, et[dt])) : Et(B, et))) {
          d && d();
          const y = wt;
          wt = c;
          try {
            const dt = [
              B,
              // pass undefined as the old value when it's changed for the first time
              et === ye ? void 0 : ct && et[0] === ye ? [] : et,
              p
            ];
            et = B, u ? u(e, 3, dt) : (
              // @ts-expect-error
              e(...dt)
            );
          } finally {
            wt = y;
          }
        }
      } else
        c.run();
  };
  return a && a(nt), c = new mo(f), c.scheduler = r ? () => r(nt, !1) : nt, p = (E) => Fo(E, !1, c), d = c.onStop = () => {
    const E = ke.get(c);
    if (E) {
      if (u)
        u(E, 4);
      else
        for (const B of E) B();
      ke.delete(c);
    }
  }, process.env.NODE_ENV !== "production" && (c.onTrack = n.onTrack, c.onTrigger = n.onTrigger), e ? s ? nt(!0) : et = c.run() : r ? r(nt.bind(null, !0), !0) : c.run(), it.pause = c.pause.bind(c), it.resume = c.resume.bind(c), it.stop = it, it;
}
function ht(t, e = 1 / 0, n) {
  if (e <= 0 || !I(t) || t.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(t)))
    return t;
  if (n.add(t), e--, T(t))
    ht(t.value, e, n);
  else if (D(t))
    for (let s = 0; s < t.length; s++)
      ht(t[s], e, n);
  else if (Kt(t) || Dt(t))
    t.forEach((s) => {
      ht(s, e, n);
    });
  else if (es(t)) {
    for (const s in t)
      ht(t[s], e, n);
    for (const s of Object.getOwnPropertySymbols(t))
      Object.prototype.propertyIsEnumerable.call(t, s) && ht(t[s], e, n);
  }
  return t;
}
/**
* @vue/runtime-core v3.5.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const Ct = [];
function Ko(t) {
  Ct.push(t);
}
function Lo() {
  Ct.pop();
}
let We = !1;
function P(t, ...e) {
  if (We) return;
  We = !0, Lt();
  const n = Ct.length ? Ct[Ct.length - 1].component : null, s = n && n.appContext.config.warnHandler, o = Wo();
  if (s)
    Ae(
      s,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        t + e.map((i) => {
          var r, a;
          return (a = (r = i.toString) == null ? void 0 : r.call(i)) != null ? a : JSON.stringify(i);
        }).join(""),
        n && n.proxy,
        o.map(
          ({ vnode: i }) => `at <${Bs(n, i.type)}>`
        ).join(`
`),
        o
      ]
    );
  else {
    const i = [`[Vue warn]: ${t}`, ...e];
    o.length && i.push(`
`, ...Yo(o)), console.warn(...i);
  }
  Wt(), We = !1;
}
function Wo() {
  let t = Ct[Ct.length - 1];
  if (!t)
    return [];
  const e = [];
  for (; t; ) {
    const n = e[0];
    n && n.vnode === t ? n.recurseCount++ : e.push({
      vnode: t,
      recurseCount: 0
    });
    const s = t.component && t.component.parent;
    t = s && s.vnode;
  }
  return e;
}
function Yo(t) {
  const e = [];
  return t.forEach((n, s) => {
    e.push(...s === 0 ? [] : [`
`], ...Jo(n));
  }), e;
}
function Jo({ vnode: t, recurseCount: e }) {
  const n = e > 0 ? `... (${e} recursive calls)` : "", s = t.component ? t.component.parent == null : !1, o = ` at <${Bs(
    t.component,
    t.type,
    s
  )}`, i = ">" + n;
  return t.props ? [o, ...Go(t.props), i] : [o + i];
}
function Go(t) {
  const e = [], n = Object.keys(t);
  return n.slice(0, 3).forEach((s) => {
    e.push(...bs(s, t[s]));
  }), n.length > 3 && e.push(" ..."), e;
}
function bs(t, e, n) {
  return Z(e) ? (e = JSON.stringify(e), n ? e : [`${t}=${e}`]) : typeof e == "number" || typeof e == "boolean" || e == null ? n ? e : [`${t}=${e}`] : T(e) ? (e = bs(t, O(e.value), !0), n ? e : [`${t}=Ref<`, e, ">"]) : $(e) ? [`${t}=fn${e.name ? `<${e.name}>` : ""}`] : (e = O(e), n ? e : [`${t}=`, e]);
}
const En = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush",
  15: "component update",
  16: "app unmount cleanup function"
};
function Ae(t, e, n, s) {
  try {
    return s ? t(...s) : t();
  } catch (o) {
    wn(o, e, n);
  }
}
function Nn(t, e, n, s) {
  if ($(t)) {
    const o = Ae(t, e, n, s);
    return o && eo(o) && o.catch((i) => {
      wn(i, e, n);
    }), o;
  }
  if (D(t)) {
    const o = [];
    for (let i = 0; i < t.length; i++)
      o.push(Nn(t[i], e, n, s));
    return o;
  } else process.env.NODE_ENV !== "production" && P(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof t}`
  );
}
function wn(t, e, n, s = !0) {
  const o = e ? e.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: r } = e && e.appContext.config || Bt;
  if (e) {
    let a = e.parent;
    const u = e.proxy, m = process.env.NODE_ENV !== "production" ? En[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; a; ) {
      const h = a.ec;
      if (h) {
        for (let c = 0; c < h.length; c++)
          if (h[c](t, u, m) === !1)
            return;
      }
      a = a.parent;
    }
    if (i) {
      Lt(), Ae(i, null, 10, [
        t,
        u,
        m
      ]), Wt();
      return;
    }
  }
  Qo(t, n, o, s, r);
}
function Qo(t, e, n, s = !0, o = !1) {
  if (process.env.NODE_ENV !== "production") {
    const i = En[e];
    if (n && Ko(n), P(`Unhandled error${i ? ` during execution of ${i}` : ""}`), n && Lo(), s)
      throw t;
    console.error(t);
  } else {
    if (o)
      throw t;
    console.error(t);
  }
}
const Q = [];
let pt = -1;
const At = [];
let gt = null, It = 0;
const Es = /* @__PURE__ */ Promise.resolve();
let Ce = null;
const Xo = 100;
function Ve(t) {
  const e = Ce || Es;
  return t ? e.then(this ? t.bind(this) : t) : e;
}
function Zo(t) {
  let e = pt + 1, n = Q.length;
  for (; e < n; ) {
    const s = e + n >>> 1, o = Q[s], i = ce(o);
    i < t || i === t && o.flags & 2 ? e = s + 1 : n = s;
  }
  return e;
}
function On(t) {
  if (!(t.flags & 1)) {
    const e = ce(t), n = Q[Q.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(t.flags & 2) && e >= ce(n) ? Q.push(t) : Q.splice(Zo(e), 0, t), t.flags |= 1, Ns();
  }
}
function Ns() {
  Ce || (Ce = Es.then(Os));
}
function ws(t) {
  D(t) ? At.push(...t) : gt && t.id === -1 ? gt.splice(It + 1, 0, t) : t.flags & 1 || (At.push(t), t.flags |= 1), Ns();
}
function ti(t) {
  if (At.length) {
    const e = [...new Set(At)].sort(
      (n, s) => ce(n) - ce(s)
    );
    if (At.length = 0, gt) {
      gt.push(...e);
      return;
    }
    for (gt = e, process.env.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()), It = 0; It < gt.length; It++) {
      const n = gt[It];
      process.env.NODE_ENV !== "production" && Ss(t, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    gt = null, It = 0;
  }
}
const ce = (t) => t.id == null ? t.flags & 2 ? -1 : 1 / 0 : t.id;
function Os(t) {
  process.env.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map());
  const e = process.env.NODE_ENV !== "production" ? (n) => Ss(t, n) : Mt;
  try {
    for (pt = 0; pt < Q.length; pt++) {
      const n = Q[pt];
      if (n && !(n.flags & 8)) {
        if (process.env.NODE_ENV !== "production" && e(n))
          continue;
        n.flags & 4 && (n.flags &= -2), Ae(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; pt < Q.length; pt++) {
      const n = Q[pt];
      n && (n.flags &= -2);
    }
    pt = -1, Q.length = 0, ti(t), Ce = null, (Q.length || At.length) && Os(t);
  }
}
function Ss(t, e) {
  const n = t.get(e) || 0;
  if (n > Xo) {
    const s = e.i, o = s && kn(s.type);
    return wn(
      `Maximum recursive updates exceeded${o ? ` in component <${o}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return t.set(e, n + 1), !1;
}
const Ye = /* @__PURE__ */ new Map();
process.env.NODE_ENV !== "production" && (je().__VUE_HMR_RUNTIME__ = {
  createRecord: Je(ei),
  rerender: Je(ni),
  reload: Je(si)
});
const $e = /* @__PURE__ */ new Map();
function ei(t, e) {
  return $e.has(t) ? !1 : ($e.set(t, {
    initialDef: xe(e),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function xe(t) {
  return Hs(t) ? t.__vccOpts : t;
}
function ni(t, e) {
  const n = $e.get(t);
  n && (n.initialDef.render = e, [...n.instances].forEach((s) => {
    e && (s.render = e, xe(s.type).render = e), s.renderCache = [], s.job.flags & 8 || s.update();
  }));
}
function si(t, e) {
  const n = $e.get(t);
  if (!n) return;
  e = xe(e), Rn(n.initialDef, e);
  const s = [...n.instances];
  for (let o = 0; o < s.length; o++) {
    const i = s[o], r = xe(i.type);
    let a = Ye.get(r);
    a || (r !== n.initialDef && Rn(r, e), Ye.set(r, a = /* @__PURE__ */ new Set())), a.add(i), i.appContext.propsCache.delete(i.type), i.appContext.emitsCache.delete(i.type), i.appContext.optionsCache.delete(i.type), i.ceReload ? (a.add(i), i.ceReload(e.styles), a.delete(i)) : i.parent ? On(() => {
      i.parent.update(), a.delete(i);
    }) : i.appContext.reload ? i.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), i.root.ce && i !== i.root && i.root.ce._removeChildStyle(r);
  }
  ws(() => {
    Ye.clear();
  });
}
function Rn(t, e) {
  K(t, e);
  for (const n in t)
    n !== "__file" && !(n in e) && delete t[n];
}
function Je(t) {
  return (e, n) => {
    try {
      return t(e, n);
    } catch (s) {
      console.error(s), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let yt, Xt = [], on = !1;
function oi(t, ...e) {
  yt ? yt.emit(t, ...e) : on || Xt.push({ event: t, args: e });
}
function Ds(t, e) {
  var n, s;
  yt = t, yt ? (yt.enabled = !0, Xt.forEach(({ event: o, args: i }) => yt.emit(o, ...i)), Xt = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((s = (n = window.navigator) == null ? void 0 : n.userAgent) != null && s.includes("jsdom")) ? ((e.__VUE_DEVTOOLS_HOOK_REPLAY__ = e.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((i) => {
    Ds(i, e);
  }), setTimeout(() => {
    yt || (e.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, on = !0, Xt = []);
  }, 3e3)) : (on = !0, Xt = []);
}
const ii = /* @__PURE__ */ ri(
  "component:updated"
  /* COMPONENT_UPDATED */
);
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ri(t) {
  return (e) => {
    oi(
      t,
      e.appContext.app,
      e.uid,
      e.parent ? e.parent.uid : void 0,
      e
    );
  };
}
let q = null, ks = null;
function In(t) {
  const e = q;
  return q = t, ks = t && t.type.__scopeId || null, e;
}
function R(t, e = q, n) {
  if (!e || t._n)
    return t;
  const s = (...o) => {
    s._d && Bn(-1);
    const i = In(e);
    let r;
    try {
      r = t(...o);
    } finally {
      In(i), s._d && Bn(1);
    }
    return process.env.NODE_ENV !== "production" && ii(e), r;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function L(t, e) {
  if (q === null)
    return process.env.NODE_ENV !== "production" && P("withDirectives can only be used inside render functions."), t;
  const n = zs(q), s = t.dirs || (t.dirs = []);
  for (let o = 0; o < e.length; o++) {
    let [i, r, a, u = Bt] = e[o];
    i && ($(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && ht(r), s.push({
      dir: i,
      instance: n,
      value: r,
      oldValue: void 0,
      arg: a,
      modifiers: u
    }));
  }
  return t;
}
const ai = (t) => t.__isTeleport;
function Cs(t, e) {
  t.shapeFlag & 6 && t.component ? (t.transition = e, Cs(t.component.subTree, e)) : t.shapeFlag & 128 ? (t.ssContent.transition = e.clone(t.ssContent), t.ssFallback.transition = e.clone(t.ssFallback)) : t.transition = e;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function xt(t, e) {
  return $(t) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    K({ name: t.name }, e, { setup: t })
  ) : t;
}
je().requestIdleCallback;
je().cancelIdleCallback;
const li = (t) => !!t.type.__asyncLoader;
function ci(t, e, n = Pt, s = !1) {
  if (n) {
    const o = n[t] || (n[t] = []), i = e.__weh || (e.__weh = (...r) => {
      Lt();
      const a = As(n), u = Nn(e, n, t, r);
      return a(), Wt(), u;
    });
    return s ? o.unshift(i) : o.push(i), i;
  } else if (process.env.NODE_ENV !== "production") {
    const o = so(En[t].replace(/ hook$/, ""));
    P(
      `${o} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const ui = (t) => (e, n = Pt) => {
  (!de || t === "sp") && ci(t, (...s) => e(...s), n);
}, ze = ui("m"), di = "components";
function zt(t, e) {
  return pi(di, t, !0, e) || t;
}
const fi = Symbol.for("v-ndc");
function pi(t, e, n = !0, s = !1) {
  const o = q || Pt;
  if (o) {
    const i = o.type;
    {
      const a = kn(
        i,
        !1
      );
      if (a && (a === e || a === Oe(e) || a === ie(Oe(e))))
        return i;
    }
    const r = (
      // local registration
      // check instance[type] first which is resolved for options API
      jn(o[t] || i[t], e) || // global registration
      jn(o.appContext[t], e)
    );
    return !r && s ? i : (process.env.NODE_ENV !== "production" && n && !r && P(`Failed to resolve ${t.slice(0, -1)}: ${e}
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`), r);
  } else process.env.NODE_ENV !== "production" && P(
    `resolve${ie(t.slice(0, -1))} can only be used in render() or setup().`
  );
}
function jn(t, e) {
  return t && (t[e] || t[Oe(e)] || t[ie(Oe(e))]);
}
function Ft(t, e, n, s) {
  let o;
  const i = n, r = D(t);
  if (r || Z(t)) {
    const a = r && rt(t);
    let u = !1, m = !1;
    a && (u = !F(t), m = lt(t), t = Me(t)), o = new Array(t.length);
    for (let h = 0, c = t.length; h < c; h++)
      o[h] = e(
        u ? m ? De(j(t[h])) : j(t[h]) : t[h],
        h,
        void 0,
        i
      );
  } else if (typeof t == "number") {
    process.env.NODE_ENV !== "production" && !Number.isInteger(t) && P(`The v-for range expect an integer value but got ${t}.`), o = new Array(t);
    for (let a = 0; a < t; a++)
      o[a] = e(a + 1, a, void 0, i);
  } else if (I(t))
    if (t[Symbol.iterator])
      o = Array.from(
        t,
        (a, u) => e(a, u, void 0, i)
      );
    else {
      const a = Object.keys(t);
      o = new Array(a.length);
      for (let u = 0, m = a.length; u < m; u++) {
        const h = a[u];
        o[u] = e(t[h], h, u, i);
      }
    }
  else
    o = [];
  return o;
}
function be(t, e, n = {}, s, o) {
  if (q.ce || q.parent && li(q.parent) && q.parent.ce)
    return e !== "default" && (n.name = e), b(), Vt(
      tt,
      null,
      [x("slot", n, s && s())],
      64
    );
  let i = t[e];
  process.env.NODE_ENV !== "production" && i && i.length > 1 && (P(
    "SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."
  ), i = () => []), i && i._c && (i._d = !1), b();
  const r = i && Vs(i(n)), a = n.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  r && r.key, u = Vt(
    tt,
    {
      key: (a && !at(a) ? a : `_${e}`) + // #7256 force differentiate fallback content from actual content
      (!r && s ? "_fb" : "")
    },
    r || (s ? s() : []),
    r && t._ === 1 ? 64 : -2
  );
  return !o && u.scopeId && (u.slotScopeIds = [u.scopeId + "-s"]), i && i._c && (i._d = !0), u;
}
function Vs(t) {
  return t.some((e) => Rs(e) ? !(e.type === Te || e.type === tt && !Vs(e.children)) : !0) ? t : null;
}
const rn = (t) => t ? Ri(t) ? zs(t) : rn(t.parent) : null, Ge = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ K(/* @__PURE__ */ Object.create(null), {
    $: (t) => t,
    $el: (t) => t.vnode.el,
    $data: (t) => t.data,
    $props: (t) => process.env.NODE_ENV !== "production" ? _e(t.props) : t.props,
    $attrs: (t) => process.env.NODE_ENV !== "production" ? _e(t.attrs) : t.attrs,
    $slots: (t) => process.env.NODE_ENV !== "production" ? _e(t.slots) : t.slots,
    $refs: (t) => process.env.NODE_ENV !== "production" ? _e(t.refs) : t.refs,
    $parent: (t) => rn(t.parent),
    $root: (t) => rn(t.root),
    $host: (t) => t.ce,
    $emit: (t) => t.emit,
    $options: (t) => mi(t),
    $forceUpdate: (t) => t.f || (t.f = () => {
      On(t.update);
    }),
    $nextTick: (t) => t.n || (t.n = Ve.bind(t.proxy)),
    $watch: (t) => Si.bind(t)
  })
), hi = {};
process.env.NODE_ENV !== "production" && (hi.ownKeys = (t) => (P(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(t)));
function qn(t) {
  return D(t) ? t.reduce(
    (e, n) => (e[n] = null, e),
    {}
  ) : t;
}
function mi(t) {
  const e = t.type, { mixins: n, extends: s } = e, {
    mixins: o,
    optionsCache: i,
    config: { optionMergeStrategies: r }
  } = t.appContext, a = i.get(e);
  let u;
  return a ? u = a : !o.length && !n && !s ? u = e : (u = {}, o.length && o.forEach(
    (m) => Pe(u, m, r, !0)
  ), Pe(u, e, r)), I(e) && i.set(e, u), u;
}
function Pe(t, e, n, s = !1) {
  const { mixins: o, extends: i } = e;
  i && Pe(t, i, n, !0), o && o.forEach(
    (r) => Pe(t, r, n, !0)
  );
  for (const r in e)
    if (s && r === "expose")
      process.env.NODE_ENV !== "production" && P(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const a = vi[r] || n && n[r];
      t[r] = a ? a(t[r], e[r]) : e[r];
    }
  return t;
}
const vi = {
  data: Mn,
  props: zn,
  emits: zn,
  // objects
  methods: Zt,
  computed: Zt,
  // lifecycle
  beforeCreate: H,
  created: H,
  beforeMount: H,
  mounted: H,
  beforeUpdate: H,
  updated: H,
  beforeDestroy: H,
  beforeUnmount: H,
  destroyed: H,
  unmounted: H,
  activated: H,
  deactivated: H,
  errorCaptured: H,
  serverPrefetch: H,
  // assets
  components: Zt,
  directives: Zt,
  // watch
  watch: _i,
  // provide / inject
  provide: Mn,
  inject: gi
};
function Mn(t, e) {
  return e ? t ? function() {
    return K(
      $(t) ? t.call(this, this) : t,
      $(e) ? e.call(this, this) : e
    );
  } : e : t;
}
function gi(t, e) {
  return Zt(An(t), An(e));
}
function An(t) {
  if (D(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++)
      e[t[n]] = t[n];
    return e;
  }
  return t;
}
function H(t, e) {
  return t ? [...new Set([].concat(t, e))] : e;
}
function Zt(t, e) {
  return t ? K(/* @__PURE__ */ Object.create(null), t, e) : e;
}
function zn(t, e) {
  return t ? D(t) && D(e) ? [.../* @__PURE__ */ new Set([...t, ...e])] : K(
    /* @__PURE__ */ Object.create(null),
    qn(t),
    qn(e ?? {})
  ) : e;
}
function _i(t, e) {
  if (!t) return e;
  if (!e) return t;
  const n = K(/* @__PURE__ */ Object.create(null), t);
  for (const s in e)
    n[s] = H(t[s], e[s]);
  return n;
}
let $s = null;
function Sn(t, e, n = !1) {
  const s = Be();
  if (s || $s) {
    let o = s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (o && t in o)
      return o[t];
    if (arguments.length > 1)
      return n && $(e) ? e.call(s && s.proxy) : e;
    process.env.NODE_ENV !== "production" && P(`injection "${String(t)}" not found.`);
  } else process.env.NODE_ENV !== "production" && P("inject() can only be used inside setup() or functional components.");
}
function yi() {
  return !!(Be() || $s);
}
const bi = {}, xs = (t) => Object.getPrototypeOf(t) === bi, Ei = Ci, Ni = Symbol.for("v-scx"), wi = () => {
  {
    const t = Sn(Ni);
    return t || process.env.NODE_ENV !== "production" && P(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), t;
  }
};
function Oi(t, e, n) {
  return process.env.NODE_ENV !== "production" && !$(e) && P(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), Ps(t, e, n);
}
function Ps(t, e, n = Bt) {
  const { immediate: s, deep: o, flush: i, once: r } = n;
  process.env.NODE_ENV !== "production" && !e && (s !== void 0 && P(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && P(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), r !== void 0 && P(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const a = K({}, n);
  process.env.NODE_ENV !== "production" && (a.onWarn = P);
  const u = e && s || !e && i !== "post";
  let m;
  if (de) {
    if (i === "sync") {
      const d = wi();
      m = d.__watcherHandles || (d.__watcherHandles = []);
    } else if (!u) {
      const d = () => {
      };
      return d.stop = Mt, d.resume = Mt, d.pause = Mt, d;
    }
  }
  const h = Pt;
  a.call = (d, p, k) => Nn(d, h, p, k);
  let c = !1;
  i === "post" ? a.scheduler = (d) => {
    Ei(d, h && h.suspense);
  } : i !== "sync" && (c = !0, a.scheduler = (d, p) => {
    p ? d() : On(d);
  }), a.augmentJob = (d) => {
    e && (d.flags |= 4), c && (d.flags |= 2, h && (d.id = h.uid, d.i = h));
  };
  const f = Uo(t, e, a);
  return de && (m ? m.push(f) : u && f()), f;
}
function Si(t, e, n) {
  const s = this.proxy, o = Z(t) ? t.includes(".") ? Di(s, t) : () => s[t] : t.bind(s, s);
  let i;
  $(e) ? i = e : (i = e.handler, n = e);
  const r = As(this), a = Ps(o, i.bind(s), n);
  return r(), a;
}
function Di(t, e) {
  const n = e.split(".");
  return () => {
    let s = t;
    for (let o = 0; o < n.length && s; o++)
      s = s[n[o]];
    return s;
  };
}
const ki = (t) => t.__isSuspense;
function Ci(t, e) {
  e && e.pendingBranch ? D(t) ? e.effects.push(...t) : e.effects.push(t) : ws(t);
}
const tt = Symbol.for("v-fgt"), Vi = Symbol.for("v-txt"), Te = Symbol.for("v-cmt"), $i = Symbol.for("v-stc"), Ee = [];
let W = null;
function b(t = !1) {
  Ee.push(W = t ? null : []);
}
function xi() {
  Ee.pop(), W = Ee[Ee.length - 1] || null;
}
let ue = 1;
function Bn(t, e = !1) {
  ue += t, t < 0 && W && e && (W.hasOnce = !0);
}
function Ts(t) {
  return t.dynamicChildren = ue > 0 ? W || Qs : null, xi(), ue > 0 && W && W.push(t), t;
}
function S(t, e, n, s, o, i) {
  return Ts(
    l(
      t,
      e,
      n,
      s,
      o,
      i,
      !0
    )
  );
}
function Vt(t, e, n, s, o) {
  return Ts(
    x(
      t,
      e,
      n,
      s,
      o,
      !0
    )
  );
}
function Rs(t) {
  return t ? t.__v_isVNode === !0 : !1;
}
const Pi = (...t) => js(
  ...t
), Is = ({ key: t }) => t ?? null, Ne = ({
  ref: t,
  ref_key: e,
  ref_for: n
}) => (typeof t == "number" && (t = "" + t), t != null ? Z(t) || T(t) || $(t) ? { i: q, r: t, k: e, f: !!n } : t : null);
function l(t, e = null, n = null, s = 0, o = null, i = t === tt ? 0 : 1, r = !1, a = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: e,
    key: e && Is(e),
    ref: e && Ne(e),
    scopeId: ks,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: s,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
    ctx: q
  };
  return a ? (Dn(u, n), i & 128 && t.normalize(u)) : n && (u.shapeFlag |= Z(n) ? 8 : 16), process.env.NODE_ENV !== "production" && u.key !== u.key && P("VNode created with invalid key (NaN). VNode type:", u.type), ue > 0 && // avoid a block node from tracking itself
  !r && // has current parent block
  W && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (u.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  u.patchFlag !== 32 && W.push(u), u;
}
const x = process.env.NODE_ENV !== "production" ? Pi : js;
function js(t, e = null, n = null, s = 0, o = null, i = !1) {
  if ((!t || t === fi) && (process.env.NODE_ENV !== "production" && !t && P(`Invalid vnode type when creating vnode: ${t}.`), t = Te), Rs(t)) {
    const a = Re(
      t,
      e,
      !0
      /* mergeRef: true */
    );
    return n && Dn(a, n), ue > 0 && !i && W && (a.shapeFlag & 6 ? W[W.indexOf(t)] = a : W.push(a)), a.patchFlag = -2, a;
  }
  if (Hs(t) && (t = t.__vccOpts), e) {
    e = Ti(e);
    let { class: a, style: u } = e;
    a && !Z(a) && (e.class = Nt(a)), I(u) && (le(u) && !D(u) && (u = K({}, u)), e.style = qe(u));
  }
  const r = Z(t) ? 1 : ki(t) ? 128 : ai(t) ? 64 : I(t) ? 4 : $(t) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && r & 4 && le(t) && (t = O(t), P(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    t
  )), l(
    t,
    e,
    n,
    s,
    o,
    r,
    i,
    !0
  );
}
function Ti(t) {
  return t ? le(t) || xs(t) ? K({}, t) : t : null;
}
function Re(t, e, n = !1, s = !1) {
  const { props: o, ref: i, patchFlag: r, children: a, transition: u } = t, m = e ? Ms(o || {}, e) : o, h = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t.type,
    props: m,
    key: m && Is(m),
    ref: e && e.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? D(i) ? i.concat(Ne(e)) : [i, Ne(e)] : Ne(e)
    ) : i,
    scopeId: t.scopeId,
    slotScopeIds: t.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && r === -1 && D(a) ? a.map(qs) : a,
    target: t.target,
    targetStart: t.targetStart,
    targetAnchor: t.targetAnchor,
    staticCount: t.staticCount,
    shapeFlag: t.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: e && t.type !== tt ? r === -1 ? 16 : r | 16 : r,
    dynamicProps: t.dynamicProps,
    dynamicChildren: t.dynamicChildren,
    appContext: t.appContext,
    dirs: t.dirs,
    transition: u,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: t.component,
    suspense: t.suspense,
    ssContent: t.ssContent && Re(t.ssContent),
    ssFallback: t.ssFallback && Re(t.ssFallback),
    placeholder: t.placeholder,
    el: t.el,
    anchor: t.anchor,
    ctx: t.ctx,
    ce: t.ce
  };
  return u && s && Cs(
    h,
    u.clone(h)
  ), h;
}
function qs(t) {
  const e = Re(t);
  return D(t.children) && (e.children = t.children.map(qs)), e;
}
function jt(t = " ", e = 0) {
  return x(Vi, null, t, e);
}
function an(t, e) {
  const n = x($i, null, t);
  return n.staticCount = e, n;
}
function X(t = "", e = !1) {
  return e ? (b(), Vt(Te, null, t)) : x(Te, null, t);
}
function Dn(t, e) {
  let n = 0;
  const { shapeFlag: s } = t;
  if (e == null)
    e = null;
  else if (D(e))
    n = 16;
  else if (typeof e == "object")
    if (s & 65) {
      const o = e.default;
      o && (o._c && (o._d = !1), Dn(t, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = e._;
      !o && !xs(e) ? e._ctx = q : o === 3 && q && (q.slots._ === 1 ? e._ = 1 : (e._ = 2, t.patchFlag |= 1024));
    }
  else $(e) ? (e = { default: e, _ctx: q }, n = 32) : (e = String(e), s & 64 ? (n = 16, e = [jt(e)]) : n = 8);
  t.children = e, t.shapeFlag |= n;
}
function Ms(...t) {
  const e = {};
  for (let n = 0; n < t.length; n++) {
    const s = t[n];
    for (const o in s)
      if (o === "class")
        e.class !== s.class && (e.class = Nt([e.class, s.class]));
      else if (o === "style")
        e.style = qe([e.style, s.style]);
      else if (Xs(o)) {
        const i = e[o], r = s[o];
        r && i !== r && !(D(i) && i.includes(r)) && (e[o] = i ? [].concat(i, r) : r);
      } else o !== "" && (e[o] = s[o]);
  }
  return e;
}
let Pt = null;
const Be = () => Pt || q;
let ln;
{
  const t = je(), e = (n, s) => {
    let o;
    return (o = t[n]) || (o = t[n] = []), o.push(s), (i) => {
      o.length > 1 ? o.forEach((r) => r(i)) : o[0](i);
    };
  };
  ln = e(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Pt = n
  ), e(
    "__VUE_SSR_SETTERS__",
    (n) => de = n
  );
}
const As = (t) => {
  const e = Pt;
  return ln(t), t.scope.on(), () => {
    t.scope.off(), ln(e);
  };
};
function Ri(t) {
  return t.vnode.shapeFlag & 4;
}
let de = !1;
process.env.NODE_ENV;
function zs(t) {
  return t.exposed ? t.exposeProxy || (t.exposeProxy = new Proxy(Mo(qt(t.exposed)), {
    get(e, n) {
      if (n in e)
        return e[n];
      if (n in Ge)
        return Ge[n](t);
    },
    has(e, n) {
      return n in e || n in Ge;
    }
  })) : t.proxy;
}
const Ii = /(?:^|[-_])(\w)/g, ji = (t) => t.replace(Ii, (e) => e.toUpperCase()).replace(/[-_]/g, "");
function kn(t, e = !0) {
  return $(t) ? t.displayName || t.name : t.name || e && t.__name;
}
function Bs(t, e, n = !1) {
  let s = kn(e);
  if (!s && e.__file) {
    const o = e.__file.match(/([^/\\]+)\.\w+$/);
    o && (s = o[1]);
  }
  if (!s && t && t.parent) {
    const o = (i) => {
      for (const r in i)
        if (i[r] === e)
          return r;
    };
    s = o(
      t.components || t.parent.type.components
    ) || o(t.appContext.components);
  }
  return s ? ji(s) : n ? "App" : "Anonymous";
}
function Hs(t) {
  return $(t) && "__vccOpts" in t;
}
const bt = (t, e) => {
  const n = Ho(t, e, de);
  if (process.env.NODE_ENV !== "production") {
    const s = Be();
    s && s.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function qi() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const t = { style: "color:#3ba776" }, e = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, s = { style: "color:#eb2f96" }, o = {
    __vue_custom_formatter: !0,
    header(c) {
      if (!I(c))
        return null;
      if (c.__isVue)
        return ["div", t, "VueInstance"];
      if (T(c)) {
        Lt();
        const f = c.value;
        return Wt(), [
          "div",
          {},
          ["span", t, h(c)],
          "<",
          a(f),
          ">"
        ];
      } else {
        if (rt(c))
          return [
            "div",
            {},
            ["span", t, F(c) ? "ShallowReactive" : "Reactive"],
            "<",
            a(c),
            `>${lt(c) ? " (readonly)" : ""}`
          ];
        if (lt(c))
          return [
            "div",
            {},
            ["span", t, F(c) ? "ShallowReadonly" : "Readonly"],
            "<",
            a(c),
            ">"
          ];
      }
      return null;
    },
    hasBody(c) {
      return c && c.__isVue;
    },
    body(c) {
      if (c && c.__isVue)
        return [
          "div",
          {},
          ...i(c.$)
        ];
    }
  };
  function i(c) {
    const f = [];
    c.type.props && c.props && f.push(r("props", O(c.props))), c.setupState !== Bt && f.push(r("setup", c.setupState)), c.data !== Bt && f.push(r("data", O(c.data)));
    const d = u(c, "computed");
    d && f.push(r("computed", d));
    const p = u(c, "inject");
    return p && f.push(r("injected", p)), f.push([
      "div",
      {},
      [
        "span",
        {
          style: s.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: c }]
    ]), f;
  }
  function r(c, f) {
    return f = K({}, f), Object.keys(f).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        c
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(f).map((d) => [
          "div",
          {},
          ["span", s, d + ": "],
          a(f[d], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function a(c, f = !0) {
    return typeof c == "number" ? ["span", e, c] : typeof c == "string" ? ["span", n, JSON.stringify(c)] : typeof c == "boolean" ? ["span", s, c] : I(c) ? ["object", { object: f ? O(c) : c }] : ["span", n, String(c)];
  }
  function u(c, f) {
    const d = c.type;
    if ($(d))
      return;
    const p = {};
    for (const k in c.ctx)
      m(d, k, f) && (p[k] = c.ctx[k]);
    return p;
  }
  function m(c, f, d) {
    const p = c[d];
    if (D(p) && p.includes(f) || I(p) && f in p || c.extends && m(c.extends, f, d) || c.mixins && c.mixins.some((k) => m(k, f, d)))
      return !0;
  }
  function h(c) {
    return F(c) ? "ShallowRef" : c.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(o) : window.devtoolsFormatters = [o];
}
const Fs = process.env.NODE_ENV !== "production" ? P : Mt;
process.env.NODE_ENV;
process.env.NODE_ENV;
/**
* @vue/runtime-dom v3.5.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Mi;
const Hn = typeof window < "u" && window.trustedTypes;
if (Hn)
  try {
    Mi = /* @__PURE__ */ Hn.createPolicy("vue", {
      createHTML: (t) => t
    });
  } catch (t) {
    process.env.NODE_ENV !== "production" && Fs(`Error creating trusted types policy: ${t}`);
  }
process.env.NODE_ENV;
Symbol(process.env.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : "");
function Ot(t, e, n, s) {
  t.addEventListener(e, n, s);
}
const Ut = (t) => {
  const e = t.props["onUpdate:modelValue"] || !1;
  return D(e) ? (n) => oo(e, n) : e;
};
function Ai(t) {
  t.target.composing = !0;
}
function Fn(t) {
  const e = t.target;
  e.composing && (e.composing = !1, e.dispatchEvent(new Event("input")));
}
const mt = Symbol("_assign"), St = {
  created(t, { modifiers: { lazy: e, trim: n, number: s } }, o) {
    t[mt] = Ut(o);
    const i = s || o.props && o.props.type === "number";
    Ot(t, e ? "change" : "input", (r) => {
      if (r.target.composing) return;
      let a = t.value;
      n && (a = a.trim()), i && (a = tn(a)), t[mt](a);
    }), n && Ot(t, "change", () => {
      t.value = t.value.trim();
    }), e || (Ot(t, "compositionstart", Ai), Ot(t, "compositionend", Fn), Ot(t, "change", Fn));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(t, { value: e }) {
    t.value = e ?? "";
  },
  beforeUpdate(t, { value: e, oldValue: n, modifiers: { lazy: s, trim: o, number: i } }, r) {
    if (t[mt] = Ut(r), t.composing) return;
    const a = (i || t.type === "number") && !/^0\d/.test(t.value) ? tn(t.value) : t.value, u = e ?? "";
    a !== u && (document.activeElement === t && t.type !== "range" && (s && e === n || o && t.value.trim() === u) || (t.value = u));
  }
}, Qe = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(t, e, n) {
    t[mt] = Ut(n), Ot(t, "change", () => {
      const s = t._modelValue, o = fe(t), i = t.checked, r = t[mt];
      if (D(s)) {
        const a = hn(s, o), u = a !== -1;
        if (i && !u)
          r(s.concat(o));
        else if (!i && u) {
          const m = [...s];
          m.splice(a, 1), r(m);
        }
      } else if (Kt(s)) {
        const a = new Set(s);
        i ? a.add(o) : a.delete(o), r(a);
      } else
        r(Us(t, i));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: Un,
  beforeUpdate(t, e, n) {
    t[mt] = Ut(n), Un(t, e, n);
  }
};
function Un(t, { value: e, oldValue: n }, s) {
  t._modelValue = e;
  let o;
  if (D(e))
    o = hn(e, s.props.value) > -1;
  else if (Kt(e))
    o = e.has(s.props.value);
  else {
    if (e === n) return;
    o = he(e, Us(t, !0));
  }
  t.checked !== o && (t.checked = o);
}
const cn = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(t, { value: e, modifiers: { number: n } }, s) {
    const o = Kt(e);
    Ot(t, "change", () => {
      const i = Array.prototype.filter.call(t.options, (r) => r.selected).map(
        (r) => n ? tn(fe(r)) : fe(r)
      );
      t[mt](
        t.multiple ? o ? new Set(i) : i : i[0]
      ), t._assigning = !0, Ve(() => {
        t._assigning = !1;
      });
    }), t[mt] = Ut(s);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(t, { value: e }) {
    Kn(t, e);
  },
  beforeUpdate(t, e, n) {
    t[mt] = Ut(n);
  },
  updated(t, { value: e }) {
    t._assigning || Kn(t, e);
  }
};
function Kn(t, e) {
  const n = t.multiple, s = D(e);
  if (n && !s && !Kt(e)) {
    process.env.NODE_ENV !== "production" && Fs(
      `<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(e).slice(8, -1)}.`
    );
    return;
  }
  for (let o = 0, i = t.options.length; o < i; o++) {
    const r = t.options[o], a = fe(r);
    if (n)
      if (s) {
        const u = typeof a;
        u === "string" || u === "number" ? r.selected = e.some((m) => String(m) === String(a)) : r.selected = hn(e, a) > -1;
      } else
        r.selected = e.has(a);
    else if (he(fe(r), e)) {
      t.selectedIndex !== o && (t.selectedIndex = o);
      return;
    }
  }
  !n && t.selectedIndex !== -1 && (t.selectedIndex = -1);
}
function fe(t) {
  return "_value" in t ? t._value : t.value;
}
function Us(t, e) {
  const n = e ? "_trueValue" : "_falseValue";
  return n in t ? t[n] : e;
}
const zi = ["ctrl", "shift", "alt", "meta"], Bi = {
  stop: (t) => t.stopPropagation(),
  prevent: (t) => t.preventDefault(),
  self: (t) => t.target !== t.currentTarget,
  ctrl: (t) => !t.ctrlKey,
  shift: (t) => !t.shiftKey,
  alt: (t) => !t.altKey,
  meta: (t) => !t.metaKey,
  left: (t) => "button" in t && t.button !== 0,
  middle: (t) => "button" in t && t.button !== 1,
  right: (t) => "button" in t && t.button !== 2,
  exact: (t, e) => zi.some((n) => t[`${n}Key`] && !e.includes(n))
}, Hi = (t, e) => {
  const n = t._withMods || (t._withMods = {}), s = e.join(".");
  return n[s] || (n[s] = ((o, ...i) => {
    for (let r = 0; r < e.length; r++) {
      const a = Bi[e[r]];
      if (a && a(o, e)) return;
    }
    return t(o, ...i);
  }));
};
/**
* vue v3.5.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Fi() {
  qi();
}
process.env.NODE_ENV !== "production" && Fi();
/*!
 * pinia v3.0.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
let te;
const Ie = (t) => te = t, Ui = process.env.NODE_ENV !== "production" ? Symbol("pinia") : (
  /* istanbul ignore next */
  Symbol()
);
function $t(t) {
  return t && typeof t == "object" && Object.prototype.toString.call(t) === "[object Object]" && typeof t.toJSON != "function";
}
var oe;
(function(t) {
  t.direct = "direct", t.patchObject = "patch object", t.patchFunction = "patch function";
})(oe || (oe = {}));
const ee = typeof window < "u";
function Ks(t, e) {
  for (const n in e) {
    const s = e[n];
    if (!(n in t))
      continue;
    const o = t[n];
    $t(o) && $t(s) && !T(s) && !rt(s) ? t[n] = Ks(o, s) : t[n] = s;
  }
  return t;
}
const Ls = () => {
};
function Ln(t, e, n, s = Ls) {
  t.push(e);
  const o = () => {
    const i = t.indexOf(e);
    i > -1 && (t.splice(i, 1), s());
  };
  return !n && os() && ho(o), o;
}
function Rt(t, ...e) {
  t.slice().forEach((n) => {
    n(...e);
  });
}
const Ki = (t) => t(), Wn = Symbol(), Xe = Symbol();
function un(t, e) {
  t instanceof Map && e instanceof Map ? e.forEach((n, s) => t.set(s, n)) : t instanceof Set && e instanceof Set && e.forEach(t.add, t);
  for (const n in e) {
    if (!e.hasOwnProperty(n))
      continue;
    const s = e[n], o = t[n];
    $t(o) && $t(s) && t.hasOwnProperty(n) && !T(s) && !rt(s) ? t[n] = un(o, s) : t[n] = s;
  }
  return t;
}
const Li = process.env.NODE_ENV !== "production" ? Symbol("pinia:skipHydration") : (
  /* istanbul ignore next */
  Symbol()
);
function Wi(t) {
  return !$t(t) || !Object.prototype.hasOwnProperty.call(t, Li);
}
const { assign: G } = Object;
function Yn(t) {
  return !!(T(t) && t.effect);
}
function Jn(t, e, n, s) {
  const { state: o, actions: i, getters: r } = e, a = n.state.value[t];
  let u;
  function m() {
    !a && (process.env.NODE_ENV === "production" || !s) && (n.state.value[t] = o ? o() : {});
    const h = process.env.NODE_ENV !== "production" && s ? (
      // use ref() to unwrap refs inside state TODO: check if this is still necessary
      Tn(z(o ? o() : {}).value)
    ) : Tn(n.state.value[t]);
    return G(h, i, Object.keys(r || {}).reduce((c, f) => (process.env.NODE_ENV !== "production" && f in h && console.warn(`[🍍]: A getter cannot have the same name as another state property. Rename one of them. Found with "${f}" in store "${t}".`), c[f] = qt(bt(() => {
      Ie(n);
      const d = n._s.get(t);
      return r[f].call(d, d);
    })), c), {}));
  }
  return u = dn(t, m, e, n, s, !0), u;
}
function dn(t, e, n = {}, s, o, i) {
  let r;
  const a = G({ actions: {} }, n);
  if (process.env.NODE_ENV !== "production" && !s._e.active)
    throw new Error("Pinia destroyed");
  const u = { deep: !0 };
  process.env.NODE_ENV !== "production" && (u.onTrigger = (_) => {
    m ? d = _ : m == !1 && !y._hotUpdating && (Array.isArray(d) ? d.push(_) : console.error("🍍 debuggerEvents should be an array. This is most likely an internal Pinia bug."));
  });
  let m, h, c = [], f = [], d;
  const p = s.state.value[t];
  !i && !p && (process.env.NODE_ENV === "production" || !o) && (s.state.value[t] = {});
  const k = z({});
  let ct;
  function ut(_) {
    let g;
    m = h = !1, process.env.NODE_ENV !== "production" && (d = []), typeof _ == "function" ? (_(s.state.value[t]), g = {
      type: oe.patchFunction,
      storeId: t,
      events: d
    }) : (un(s.state.value[t], _), g = {
      type: oe.patchObject,
      payload: _,
      storeId: t,
      events: d
    });
    const v = ct = Symbol();
    Ve().then(() => {
      ct === v && (m = !0);
    }), h = !0, Rt(c, g, s.state.value[t]);
  }
  const it = i ? function() {
    const { state: g } = n, v = g ? g() : {};
    this.$patch((N) => {
      G(N, v);
    });
  } : (
    /* istanbul ignore next */
    process.env.NODE_ENV !== "production" ? () => {
      throw new Error(`🍍: Store "${t}" is built using the setup syntax and does not implement $reset().`);
    } : Ls
  );
  function et() {
    r.stop(), c = [], f = [], s._s.delete(t);
  }
  const nt = (_, g = "") => {
    if (Wn in _)
      return _[Xe] = g, _;
    const v = function() {
      Ie(s);
      const N = Array.from(arguments), M = [], Jt = [];
      function Ys(J) {
        M.push(J);
      }
      function Js(J) {
        Jt.push(J);
      }
      Rt(f, {
        args: N,
        name: v[Xe],
        store: y,
        after: Ys,
        onError: Js
      });
      let Gt;
      try {
        Gt = _.apply(this && this.$id === t ? this : y, N);
      } catch (J) {
        throw Rt(Jt, J), J;
      }
      return Gt instanceof Promise ? Gt.then((J) => (Rt(M, J), J)).catch((J) => (Rt(Jt, J), Promise.reject(J))) : (Rt(M, Gt), Gt);
    };
    return v[Wn] = !0, v[Xe] = g, v;
  }, E = /* @__PURE__ */ qt({
    actions: {},
    getters: {},
    state: [],
    hotState: k
  }), B = {
    _p: s,
    // _s: scope,
    $id: t,
    $onAction: Ln.bind(null, f),
    $patch: ut,
    $reset: it,
    $subscribe(_, g = {}) {
      const v = Ln(c, _, g.detached, () => N()), N = r.run(() => Oi(() => s.state.value[t], (M) => {
        (g.flush === "sync" ? h : m) && _({
          storeId: t,
          type: oe.direct,
          events: d
        }, M);
      }, G({}, u, g)));
      return v;
    },
    $dispose: et
  }, y = Ht(process.env.NODE_ENV !== "production" || process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && ee ? G(
    {
      _hmrPayload: E,
      _customProperties: qt(/* @__PURE__ */ new Set())
      // devtools custom properties
    },
    B
    // must be added later
    // setupStore
  ) : B);
  s._s.set(t, y);
  const st = (s._a && s._a.runWithContext || Ki)(() => s._e.run(() => (r = po()).run(() => e({ action: nt }))));
  for (const _ in st) {
    const g = st[_];
    if (T(g) && !Yn(g) || rt(g))
      process.env.NODE_ENV !== "production" && o ? k.value[_] = Le(st, _) : i || (p && Wi(g) && (T(g) ? g.value = p[_] : un(g, p[_])), s.state.value[t][_] = g), process.env.NODE_ENV !== "production" && E.state.push(_);
    else if (typeof g == "function") {
      const v = process.env.NODE_ENV !== "production" && o ? g : nt(g, _);
      st[_] = v, process.env.NODE_ENV !== "production" && (E.actions[_] = g), a.actions[_] = g;
    } else process.env.NODE_ENV !== "production" && Yn(g) && (E.getters[_] = i ? (
      // @ts-expect-error
      n.getters[_]
    ) : g, ee && (st._getters || // @ts-expect-error: same
    (st._getters = qt([]))).push(_));
  }
  if (G(y, st), G(O(y), st), Object.defineProperty(y, "$state", {
    get: () => process.env.NODE_ENV !== "production" && o ? k.value : s.state.value[t],
    set: (_) => {
      if (process.env.NODE_ENV !== "production" && o)
        throw new Error("cannot set hotState");
      ut((g) => {
        G(g, _);
      });
    }
  }), process.env.NODE_ENV !== "production" && (y._hotUpdate = qt((_) => {
    y._hotUpdating = !0, _._hmrPayload.state.forEach((g) => {
      if (g in y.$state) {
        const v = _.$state[g], N = y.$state[g];
        typeof v == "object" && $t(v) && $t(N) ? Ks(v, N) : _.$state[g] = N;
      }
      y[g] = Le(_.$state, g);
    }), Object.keys(y.$state).forEach((g) => {
      g in _.$state || delete y[g];
    }), m = !1, h = !1, s.state.value[t] = Le(_._hmrPayload, "hotState"), h = !0, Ve().then(() => {
      m = !0;
    });
    for (const g in _._hmrPayload.actions) {
      const v = _[g];
      y[g] = //
      nt(v, g);
    }
    for (const g in _._hmrPayload.getters) {
      const v = _._hmrPayload.getters[g], N = i ? (
        // special handling of options api
        bt(() => (Ie(s), v.call(y, y)))
      ) : v;
      y[g] = //
      N;
    }
    Object.keys(y._hmrPayload.getters).forEach((g) => {
      g in _._hmrPayload.getters || delete y[g];
    }), Object.keys(y._hmrPayload.actions).forEach((g) => {
      g in _._hmrPayload.actions || delete y[g];
    }), y._hmrPayload = _._hmrPayload, y._getters = _._getters, y._hotUpdating = !1;
  })), process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && ee) {
    const _ = {
      writable: !0,
      configurable: !0,
      // avoid warning on devtools trying to display this property
      enumerable: !1
    };
    ["_p", "_hmrPayload", "_getters", "_customProperties"].forEach((g) => {
      Object.defineProperty(y, g, G({ value: y[g] }, _));
    });
  }
  return s._p.forEach((_) => {
    if (process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && ee) {
      const g = r.run(() => _({
        store: y,
        app: s._a,
        pinia: s,
        options: a
      }));
      Object.keys(g || {}).forEach((v) => y._customProperties.add(v)), G(y, g);
    } else
      G(y, r.run(() => _({
        store: y,
        app: s._a,
        pinia: s,
        options: a
      })));
  }), process.env.NODE_ENV !== "production" && y.$state && typeof y.$state == "object" && typeof y.$state.constructor == "function" && !y.$state.constructor.toString().includes("[native code]") && console.warn(`[🍍]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${y.$id}".`), p && i && n.hydrate && n.hydrate(y.$state, p), m = !0, h = !0, y;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Yi(t, e, n) {
  let s;
  const o = typeof e == "function";
  s = o ? n : e;
  function i(r, a) {
    const u = yi();
    if (r = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    (process.env.NODE_ENV === "test" && te && te._testing ? null : r) || (u ? Sn(Ui, null) : null), r && Ie(r), process.env.NODE_ENV !== "production" && !te)
      throw new Error(`[🍍]: "getActivePinia()" was called but there was no active Pinia. Are you trying to use a store before calling "app.use(pinia)"?
See https://pinia.vuejs.org/core-concepts/outside-component-usage.html for help.
This will fail in production.`);
    r = te, r._s.has(t) || (o ? dn(t, e, s, r) : Jn(t, s, r), process.env.NODE_ENV !== "production" && (i._pinia = r));
    const m = r._s.get(t);
    if (process.env.NODE_ENV !== "production" && a) {
      const h = "__hot:" + t, c = o ? dn(h, e, s, r, !0) : Jn(h, G({}, s), r, !0);
      a._hotUpdate(c), delete r.state.value[h], r._s.delete(h);
    }
    if (process.env.NODE_ENV !== "production" && ee) {
      const h = Be();
      if (h && h.proxy && // avoid adding stores that are just built for hot module replacement
      !a) {
        const c = h.proxy, f = "_pStores" in c ? c._pStores : c._pStores = {};
        f[t] = m;
      }
    }
    return m;
  }
  return i.$id = t, i;
}
const me = /* @__PURE__ */ Yi("client", () => {
  const t = z(null), e = z({
    totalOrders: 0,
    activeOrders: 0,
    totalSpent: 0,
    bonusPoints: 0
  }), n = z([]), s = z([]), o = z([]), i = z(!1), r = z(null), a = z([]), u = bt(() => t.value !== null), m = bt(() => a.value.length > 0), h = bt(
    () => n.value.reduce((v, N) => v + N.total, 0)
  ), c = bt(
    () => n.value.filter((v) => v.status === "pending")
  ), f = bt(
    () => n.value.filter((v) => v.status === "delivered")
  );
  async function d() {
    i.value = !0, r.value = null;
    try {
      await new Promise((v) => setTimeout(v, 1e3)), e.value = {
        totalOrders: 25,
        activeOrders: 3,
        totalSpent: 1580,
        bonusPoints: 450
      }, console.log("Client stats fetched:", e.value);
    } catch (v) {
      r.value = "Statistikalarni yuklashda xatolik", console.error(v);
    } finally {
      i.value = !1;
    }
  }
  async function p() {
    i.value = !0, r.value = null;
    try {
      await new Promise((v) => setTimeout(v, 1200)), n.value = [
        {
          id: 1001,
          date: /* @__PURE__ */ new Date(),
          status: "pending",
          items: [
            {
              id: 1,
              name: "Wireless Headphones",
              quantity: 1,
              price: 89.99,
              image: "/images/headphones.jpg"
            }
          ],
          total: 89.99
        },
        {
          id: 1002,
          date: new Date(Date.now() - 1440 * 60 * 1e3),
          status: "shipped",
          items: [
            {
              id: 2,
              name: "Smartphone Case",
              quantity: 2,
              price: 19.99,
              image: "/images/case.jpg"
            }
          ],
          total: 39.98
        },
        {
          id: 1003,
          date: new Date(Date.now() - 4320 * 60 * 1e3),
          status: "delivered",
          items: [
            {
              id: 3,
              name: "USB Cable",
              quantity: 3,
              price: 9.99,
              image: "/images/cable.jpg"
            }
          ],
          total: 29.97
        }
      ], console.log("Orders fetched:", n.value.length);
    } catch (v) {
      r.value = "Buyurtmalarni yuklashda xatolik", console.error(v);
    } finally {
      i.value = !1;
    }
  }
  async function k() {
    i.value = !0, r.value = null;
    try {
      await new Promise((v) => setTimeout(v, 800)), s.value = [
        {
          id: 1,
          title: "Yangi buyurtma berdi",
          description: "Wireless Headphones buyurtma qilindi",
          date: /* @__PURE__ */ new Date(),
          type: "order"
        },
        {
          id: 2,
          title: "To'lov amalga oshirildi",
          description: "Buyurtma #1002 uchun to'lov qabul qilindi",
          date: new Date(Date.now() - 720 * 60 * 1e3),
          type: "payment"
        },
        {
          id: 3,
          title: "Buyurtma yetkazildi",
          description: "USB Cable buyurtmasi muvaffaqiyatli yetkazildi",
          date: new Date(Date.now() - 4320 * 60 * 1e3),
          type: "delivery"
        }
      ], console.log("Recent activities fetched:", s.value.length);
    } catch (v) {
      r.value = "Faoliyat tarixini yuklashda xatolik", console.error(v);
    } finally {
      i.value = !1;
    }
  }
  async function ct() {
    i.value = !0, r.value = null;
    try {
      await new Promise((v) => setTimeout(v, 600)), o.value = [
        {
          id: 2001,
          subject: "Buyurtma bilan bog'liq savol",
          message: "Mening buyurtmam qachon yetkaziladi?",
          priority: "medium",
          status: "in_progress",
          createdAt: new Date(Date.now() - 2880 * 60 * 1e3),
          updatedAt: new Date(Date.now() - 1440 * 60 * 1e3)
        }
      ], console.log("Support tickets fetched:", o.value.length);
    } catch (v) {
      r.value = "Yordam so'rovlarini yuklashda xatolik", console.error(v);
    } finally {
      i.value = !1;
    }
  }
  function ut(v) {
    t.value = v, console.log("Current client set:", v.name);
  }
  function it() {
    t.value = null, a.value = [], n.value = [], s.value = [], o.value = [], console.log("Client logged out");
  }
  async function et(v) {
    i.value = !0, r.value = null;
    try {
      await new Promise((N) => setTimeout(N, 800)), t.value && (Object.assign(t.value, v), console.log("Profile updated:", v));
    } catch (N) {
      r.value = "Profilni yangilashda xatolik", console.error(N);
    } finally {
      i.value = !1;
    }
  }
  async function nt(v) {
    i.value = !0, r.value = null;
    try {
      await new Promise((N) => setTimeout(N, 500)), console.log("Settings updated:", v);
    } catch (N) {
      r.value = "Sozlamalarni saqlashda xatolik", console.error(N);
    } finally {
      i.value = !1;
    }
  }
  function E(v) {
    const N = n.value.find((M) => M.id === v);
    N && N.status === "pending" && (N.status = "cancelled", dt(`Buyurtma #${v} bekor qilindi`), console.log("Order cancelled:", v));
  }
  function B(v) {
    const N = n.value.find((M) => M.id === v);
    if (N) {
      const M = {
        id: Math.max(...n.value.map((Jt) => Jt.id)) + 1,
        date: /* @__PURE__ */ new Date(),
        status: "pending",
        items: [...N.items],
        total: N.total
      };
      n.value.unshift(M), dt("Buyurtma qayta berildi"), console.log("Reorder created:", M.id);
    }
  }
  async function y(v) {
    i.value = !0, r.value = null;
    try {
      await new Promise((M) => setTimeout(M, 1e3));
      const N = {
        id: Math.max(...o.value.map((M) => M.id), 2e3) + 1,
        subject: v.subject,
        message: v.message,
        priority: v.priority,
        status: "open",
        createdAt: /* @__PURE__ */ new Date(),
        updatedAt: /* @__PURE__ */ new Date()
      };
      o.value.unshift(N), console.log("Support request submitted:", N.id);
    } catch (N) {
      throw r.value = "So'rov yuborishda xatolik", console.error(N), N;
    } finally {
      i.value = !1;
    }
  }
  function dt(v) {
    a.value.unshift(v), setTimeout(() => {
      st(v);
    }, 5e3);
  }
  function st(v) {
    const N = a.value.indexOf(v);
    N > -1 && a.value.splice(N, 1);
  }
  function _() {
    a.value = [];
  }
  function g() {
    ut({
      id: 1,
      name: "John Doe",
      email: "john.doe@email.com",
      phone: "+998 90 123 45 67",
      address: "Toshkent sh., Yunusobod t., 1-uy",
      birthDate: "1990-05-15",
      joinDate: new Date(2023, 0, 15),
      status: "active"
    });
  }
  return {
    // State
    currentClient: t,
    stats: e,
    orders: n,
    recentActivities: s,
    supportTickets: o,
    loading: i,
    error: r,
    notifications: a,
    // Getters
    isLoggedIn: u,
    hasNotifications: m,
    totalOrderValue: h,
    pendingOrders: c,
    completedOrders: f,
    // Actions
    fetchStats: d,
    fetchOrders: p,
    fetchRecentActivities: k,
    fetchSupportTickets: ct,
    setCurrentClient: ut,
    logout: it,
    updateProfile: et,
    updateSettings: nt,
    cancelOrder: E,
    reorderItems: B,
    submitSupportRequest: y,
    addNotification: dt,
    removeNotification: st,
    clearAllNotifications: _,
    initializeDemoClient: g
  };
});
/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */
var Gn;
(function(t) {
  t.pop = "pop", t.push = "push";
})(Gn || (Gn = {}));
var Qn;
(function(t) {
  t.back = "back", t.forward = "forward", t.unknown = "";
})(Qn || (Qn = {}));
Symbol(process.env.NODE_ENV !== "production" ? "navigation failure" : "");
var Xn;
(function(t) {
  t[t.aborted = 4] = "aborted", t[t.cancelled = 8] = "cancelled", t[t.duplicated = 16] = "duplicated";
})(Xn || (Xn = {}));
Symbol(process.env.NODE_ENV !== "production" ? "router view location matched" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router view depth" : "");
const Ji = Symbol(process.env.NODE_ENV !== "production" ? "router" : "");
Symbol(process.env.NODE_ENV !== "production" ? "route location" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router view location" : "");
function Ws() {
  return Sn(Ji);
}
const Gi = { class: "client-layout" }, Qi = { class: "client-header" }, Xi = { class: "header-container" }, Zi = { class: "client-nav" }, tr = { class: "user-menu" }, er = { key: 0 }, nr = { class: "client-main" }, sr = { class: "container" }, or = {
  key: 0,
  class: "notifications"
}, ir = ["onClick"], rr = {
  key: 1,
  class: "loading"
}, ar = {
  key: 2,
  class: "error"
}, lr = /* @__PURE__ */ xt({
  __name: "ClientLayout",
  setup(t) {
    const e = me(), n = Ws(), s = () => {
      e.logout(), n.push("/");
    };
    return (o, i) => {
      const r = zt("router-link"), a = zt("router-view");
      return b(), S("div", Gi, [
        l("header", Qi, [
          l("div", Xi, [
            i[5] || (i[5] = l("div", { class: "logo" }, [
              l("h2", null, "Client Portal")
            ], -1)),
            l("nav", Zi, [
              x(r, {
                to: "/client",
                class: "nav-item"
              }, {
                default: R(() => [...i[1] || (i[1] = [
                  jt(" Bosh sahifa ", -1)
                ])]),
                _: 1
              }),
              x(r, {
                to: "/client/profile",
                class: "nav-item"
              }, {
                default: R(() => [...i[2] || (i[2] = [
                  jt(" Profil ", -1)
                ])]),
                _: 1
              }),
              x(r, {
                to: "/client/orders",
                class: "nav-item"
              }, {
                default: R(() => [...i[3] || (i[3] = [
                  jt(" Buyurtmalar ", -1)
                ])]),
                _: 1
              }),
              x(r, {
                to: "/client/support",
                class: "nav-item"
              }, {
                default: R(() => [...i[4] || (i[4] = [
                  jt(" Qo'llab-quvvatlash ", -1)
                ])]),
                _: 1
              })
            ]),
            l("div", tr, [
              w(e).currentClient ? (b(), S("span", er, C(w(e).currentClient.name), 1)) : X("", !0),
              l("button", {
                class: "logout-btn",
                onClick: s
              }, " Chiqish ")
            ])
          ])
        ]),
        l("main", nr, [
          l("div", sr, [
            w(e).hasNotifications ? (b(), S("div", or, [
              (b(!0), S(tt, null, Ft(w(e).notifications, (u) => (b(), S("div", {
                key: u,
                class: "notification"
              }, [
                jt(C(u) + " ", 1),
                l("button", {
                  onClick: (m) => w(e).removeNotification(u)
                }, " × ", 8, ir)
              ]))), 128))
            ])) : X("", !0),
            w(e).loading ? (b(), S("div", rr, [...i[6] || (i[6] = [
              l("div", { class: "loading-spinner" }, null, -1),
              l("p", null, "Yuklanmoqda...", -1)
            ])])) : X("", !0),
            w(e).error ? (b(), S("div", ar, [
              l("p", null, C(w(e).error), 1),
              l("button", {
                onClick: i[0] || (i[0] = (u) => w(e).error = null)
              }, " Yopish ")
            ])) : X("", !0),
            x(a)
          ])
        ]),
        i[7] || (i[7] = l("footer", { class: "client-footer" }, [
          l("div", { class: "footer-container" }, [
            l("p", null, "© 2025 Client Portal. Barcha huquqlar himoyalangan.")
          ])
        ], -1))
      ]);
    };
  }
}), Yt = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [s, o] of e)
    n[s] = o;
  return n;
}, Xa = /* @__PURE__ */ Yt(lr, [["__scopeId", "data-v-aefc9d05"]]), Ze = /* @__PURE__ */ xt({
  __name: "BaseButton",
  props: {
    color: { default: "primary" },
    size: { default: "md" },
    loading: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    outline: { type: Boolean, default: !1 },
    flat: { type: Boolean, default: !1 },
    rounded: { type: Boolean, default: !1 },
    push: { type: Boolean, default: !1 },
    glossy: { type: Boolean, default: !1 },
    fab: { type: Boolean, default: !1 },
    icon: {},
    label: {}
  },
  emits: ["click"],
  setup(t) {
    return (e, n) => {
      const s = zt("q-btn");
      return b(), Vt(s, Ms({
        color: e.color,
        size: e.size,
        loading: e.loading,
        disable: e.disabled,
        outline: e.outline,
        flat: e.flat,
        rounded: e.rounded,
        push: e.push,
        glossy: e.glossy,
        fab: e.fab,
        icon: e.icon,
        label: e.label
      }, e.$attrs, {
        onClick: n[0] || (n[0] = (o) => e.$emit("click", o))
      }), {
        default: R(() => [
          be(e.$slots, "default")
        ]),
        _: 3
      }, 16, ["color", "size", "loading", "disable", "outline", "flat", "rounded", "push", "glossy", "fab", "icon", "label"]);
    };
  }
}), cr = { class: "text-h6" }, ur = {
  key: 0,
  class: "text-subtitle2"
}, dr = /* @__PURE__ */ xt({
  __name: "BaseCard",
  props: {
    title: {},
    subtitle: {},
    flat: { type: Boolean },
    bordered: { type: Boolean },
    square: { type: Boolean },
    cardClass: {},
    cardStyle: {},
    contentClass: {},
    actionsAlign: {}
  },
  setup(t) {
    return (e, n) => {
      const s = zt("q-card-section"), o = zt("q-card-actions"), i = zt("q-card");
      return b(), Vt(i, {
        class: Nt(e.cardClass),
        style: qe(e.cardStyle),
        flat: e.flat,
        bordered: e.bordered,
        square: e.square
      }, {
        default: R(() => [
          e.$slots.header || e.title ? (b(), Vt(s, {
            key: 0,
            class: "card-header"
          }, {
            default: R(() => [
              be(e.$slots, "header", {}, () => [
                l("div", cr, C(e.title), 1),
                e.subtitle ? (b(), S("div", ur, C(e.subtitle), 1)) : X("", !0)
              ], !0)
            ]),
            _: 3
          })) : X("", !0),
          x(s, {
            class: Nt(e.contentClass)
          }, {
            default: R(() => [
              be(e.$slots, "default", {}, void 0, !0)
            ]),
            _: 3
          }, 8, ["class"]),
          e.$slots.actions ? (b(), Vt(o, {
            key: 1,
            align: e.actionsAlign
          }, {
            default: R(() => [
              be(e.$slots, "actions", {}, void 0, !0)
            ]),
            _: 3
          }, 8, ["align"])) : X("", !0)
        ]),
        _: 3
      }, 8, ["class", "style", "flat", "bordered", "square"]);
    };
  }
}), vt = /* @__PURE__ */ Yt(dr, [["__scopeId", "data-v-a8dd44d8"]]), fr = { class: "client-home" }, pr = { class: "dashboard-cards" }, hr = { class: "card-number" }, mr = { class: "card-number" }, vr = { class: "card-number" }, gr = { class: "card-number" }, _r = { class: "activity-list" }, yr = { class: "activity-content" }, br = { class: "quick-actions" }, Er = { class: "actions-grid" }, Nr = /* @__PURE__ */ xt({
  __name: "ClientHome",
  setup(t) {
    const e = Ws(), n = me();
    ze(() => {
      n.fetchStats(), n.fetchRecentActivities();
    });
    const s = (o) => new Intl.DateTimeFormat("uz-UZ", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    }).format(o);
    return (o, i) => (b(), S("div", fr, [
      i[8] || (i[8] = l("div", { class: "welcome-section" }, [
        l("h1", null, "Xush kelibsiz, Client Portal'ga!"),
        l("p", null, "Bu yerda siz o'zingizning hisobingizni boshqarishingiz mumkin")
      ], -1)),
      l("div", pr, [
        x(w(vt), {
          title: "Mening Buyurtmalarim",
          subtitle: "Jami buyurtmalar soni",
          class: "stats-card"
        }, {
          default: R(() => [
            l("div", hr, C(w(n).stats.totalOrders), 1)
          ]),
          _: 1
        }),
        x(w(vt), {
          title: "Faol Buyurtmalar",
          subtitle: "Hozirda faol buyurtmalar",
          class: "stats-card"
        }, {
          default: R(() => [
            l("div", mr, C(w(n).stats.activeOrders), 1)
          ]),
          _: 1
        }),
        x(w(vt), {
          title: "Jami Xaridlar",
          subtitle: "Jami sarflangan mablag'",
          class: "stats-card"
        }, {
          default: R(() => [
            l("div", vr, " $" + C(w(n).stats.totalSpent), 1)
          ]),
          _: 1
        }),
        x(w(vt), {
          title: "Bonuslar",
          subtitle: "To'plangan bonus ballari",
          class: "stats-card"
        }, {
          default: R(() => [
            l("div", gr, C(w(n).stats.bonusPoints), 1)
          ]),
          _: 1
        })
      ]),
      x(w(vt), {
        title: "So'nggi Faoliyat",
        class: "recent-activity-card"
      }, {
        default: R(() => [
          l("div", _r, [
            (b(!0), S(tt, null, Ft(w(n).recentActivities, (r) => (b(), S("div", {
              key: r.id,
              class: "activity-item"
            }, [
              i[3] || (i[3] = l("div", { class: "activity-icon" }, " 📦 ", -1)),
              l("div", yr, [
                l("h4", null, C(r.title), 1),
                l("p", null, C(r.description), 1),
                l("small", null, C(s(r.date)), 1)
              ])
            ]))), 128))
          ])
        ]),
        _: 1
      }),
      l("div", br, [
        i[7] || (i[7] = l("h2", null, "Tezkor Amallar", -1)),
        l("div", Er, [
          x(w(vt), { class: "action-card-wrapper" }, {
            actions: R(() => [
              x(w(Ze), {
                class: "full-width",
                color: "primary",
                label: "Yangi Buyurtma",
                onClick: i[0] || (i[0] = (r) => w(e).push("/client/orders"))
              })
            ]),
            default: R(() => [
              i[4] || (i[4] = l("div", { class: "action-content" }, [
                l("div", { class: "action-icon" }, " 🛒 "),
                l("h3", null, "Yangi Buyurtma"),
                l("p", null, "Yangi buyurtma berish")
              ], -1))
            ]),
            _: 1
          }),
          x(w(vt), { class: "action-card-wrapper" }, {
            actions: R(() => [
              x(w(Ze), {
                class: "full-width",
                color: "secondary",
                label: "Profilni Ko'rish",
                onClick: i[1] || (i[1] = (r) => w(e).push("/client/profile"))
              })
            ]),
            default: R(() => [
              i[5] || (i[5] = l("div", { class: "action-content" }, [
                l("div", { class: "action-icon" }, " 👤 "),
                l("h3", null, "Profil"),
                l("p", null, "Profil ma'lumotlarini ko'rish")
              ], -1))
            ]),
            _: 1
          }),
          x(w(vt), { class: "action-card-wrapper" }, {
            actions: R(() => [
              x(w(Ze), {
                class: "full-width",
                color: "accent",
                label: "Yordam Olish",
                onClick: i[2] || (i[2] = (r) => w(e).push("/client/support"))
              })
            ]),
            default: R(() => [
              i[6] || (i[6] = l("div", { class: "action-content" }, [
                l("div", { class: "action-icon" }, " 💬 "),
                l("h3", null, "Yordam"),
                l("p", null, "Qo'llab-quvvatlash xizmati")
              ], -1))
            ]),
            _: 1
          })
        ])
      ])
    ]));
  }
}), wr = /* @__PURE__ */ Yt(Nr, [["__scopeId", "data-v-f67a8fe6"]]), Or = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: wr
}, Symbol.toStringTag, { value: "Module" })), Sr = { class: "client-profile" }, Dr = { class: "profile-content" }, kr = { class: "profile-card" }, Cr = { class: "profile-avatar" }, Vr = ["src", "alt"], $r = {
  key: 1,
  class: "default-avatar"
}, xr = { class: "profile-info" }, Pr = { class: "info-group" }, Tr = ["disabled"], Rr = { class: "info-group" }, Ir = ["disabled"], jr = { class: "info-group" }, qr = ["disabled"], Mr = { class: "info-group" }, Ar = ["disabled"], zr = { class: "info-group" }, Br = ["disabled"], Hr = { class: "profile-actions" }, Fr = { class: "profile-stats" }, Ur = { class: "stats-grid" }, Kr = { class: "stat-item" }, Lr = { class: "stat-number" }, Wr = { class: "stat-item" }, Yr = { class: "stat-number" }, Jr = { class: "stat-item" }, Gr = { class: "stat-number" }, Qr = { class: "account-settings" }, Xr = { class: "settings-list" }, Zr = { class: "setting-item" }, ta = { class: "setting-item" }, ea = { class: "setting-item" }, na = /* @__PURE__ */ xt({
  __name: "ClientProfile",
  setup(t) {
    const e = me(), n = z(!1), s = Ht({
      name: "",
      email: "",
      phone: "",
      address: "",
      birthDate: ""
    }), o = Ht({
      emailNotifications: !0,
      smsNotifications: !1,
      marketingEmails: !1
    });
    ze(() => {
      e.currentClient && Object.assign(s, {
        name: e.currentClient.name,
        email: e.currentClient.email,
        phone: e.currentClient.phone || "",
        address: e.currentClient.address || "",
        birthDate: e.currentClient.birthDate || ""
      });
    });
    const i = (h) => h.split(" ").map((c) => c[0]).join("").toUpperCase(), r = () => {
      n.value = !0;
    }, a = () => {
      e.updateProfile(s), n.value = !1, e.addNotification("Profil muvaffaqiyatli yangilandi");
    }, u = () => {
      n.value = !1, e.currentClient && Object.assign(s, {
        name: e.currentClient.name,
        email: e.currentClient.email,
        phone: e.currentClient.phone || "",
        address: e.currentClient.address || "",
        birthDate: e.currentClient.birthDate || ""
      });
    }, m = () => {
      e.updateSettings(o), e.addNotification("Sozlamalar saqlandi");
    };
    return (h, c) => {
      var f, d;
      return b(), S("div", Sr, [
        c[22] || (c[22] = l("div", { class: "profile-header" }, [
          l("h1", null, "Mening Profilim"),
          l("p", null, "Shaxsiy ma'lumotlaringizni ko'ring va tahrirlang")
        ], -1)),
        l("div", Dr, [
          l("div", kr, [
            l("div", Cr, [
              (f = w(e).currentClient) != null && f.avatar ? (b(), S("img", {
                key: 0,
                src: w(e).currentClient.avatar,
                alt: w(e).currentClient.name
              }, null, 8, Vr)) : (b(), S("div", $r, C(i(((d = w(e).currentClient) == null ? void 0 : d.name) || "")), 1)),
              c[8] || (c[8] = l("button", { class: "upload-btn" }, " Rasm yuklash ", -1))
            ]),
            l("div", xr, [
              l("div", Pr, [
                c[9] || (c[9] = l("label", null, "To'liq ism", -1)),
                L(l("input", {
                  "onUpdate:modelValue": c[0] || (c[0] = (p) => s.name = p),
                  type: "text",
                  disabled: !n.value
                }, null, 8, Tr), [
                  [St, s.name]
                ])
              ]),
              l("div", Rr, [
                c[10] || (c[10] = l("label", null, "Email", -1)),
                L(l("input", {
                  "onUpdate:modelValue": c[1] || (c[1] = (p) => s.email = p),
                  type: "email",
                  disabled: !n.value
                }, null, 8, Ir), [
                  [St, s.email]
                ])
              ]),
              l("div", jr, [
                c[11] || (c[11] = l("label", null, "Telefon raqam", -1)),
                L(l("input", {
                  "onUpdate:modelValue": c[2] || (c[2] = (p) => s.phone = p),
                  type: "tel",
                  disabled: !n.value
                }, null, 8, qr), [
                  [St, s.phone]
                ])
              ]),
              l("div", Mr, [
                c[12] || (c[12] = l("label", null, "Manzil", -1)),
                L(l("textarea", {
                  "onUpdate:modelValue": c[3] || (c[3] = (p) => s.address = p),
                  disabled: !n.value,
                  rows: "3"
                }, null, 8, Ar), [
                  [St, s.address]
                ])
              ]),
              l("div", zr, [
                c[13] || (c[13] = l("label", null, "Tug'ilgan sana", -1)),
                L(l("input", {
                  "onUpdate:modelValue": c[4] || (c[4] = (p) => s.birthDate = p),
                  type: "date",
                  disabled: !n.value
                }, null, 8, Br), [
                  [St, s.birthDate]
                ])
              ]),
              l("div", Hr, [
                n.value ? (b(), S(tt, { key: 1 }, [
                  l("button", {
                    class: "save-btn",
                    onClick: a
                  }, " Saqlash "),
                  l("button", {
                    class: "cancel-btn",
                    onClick: u
                  }, " Bekor qilish ")
                ], 64)) : (b(), S("button", {
                  key: 0,
                  class: "edit-btn",
                  onClick: r
                }, " Tahrirlash "))
              ])
            ])
          ]),
          l("div", Fr, [
            c[17] || (c[17] = l("h2", null, "Statistika", -1)),
            l("div", Ur, [
              l("div", Kr, [
                l("div", Lr, C(w(e).stats.totalOrders), 1),
                c[14] || (c[14] = l("div", { class: "stat-label" }, " Jami buyurtmalar ", -1))
              ]),
              l("div", Wr, [
                l("div", Yr, " $" + C(w(e).stats.totalSpent), 1),
                c[15] || (c[15] = l("div", { class: "stat-label" }, " Jami xaridlar ", -1))
              ]),
              l("div", Jr, [
                l("div", Gr, C(w(e).stats.bonusPoints), 1),
                c[16] || (c[16] = l("div", { class: "stat-label" }, " Bonus ballari ", -1))
              ])
            ])
          ]),
          l("div", Qr, [
            c[21] || (c[21] = l("h2", null, "Hisob sozlamalari", -1)),
            l("div", Xr, [
              l("div", Zr, [
                c[18] || (c[18] = l("label", null, "Email bildirishnomalar", -1)),
                L(l("input", {
                  "onUpdate:modelValue": c[5] || (c[5] = (p) => o.emailNotifications = p),
                  type: "checkbox"
                }, null, 512), [
                  [Qe, o.emailNotifications]
                ])
              ]),
              l("div", ta, [
                c[19] || (c[19] = l("label", null, "SMS bildirishnomalar", -1)),
                L(l("input", {
                  "onUpdate:modelValue": c[6] || (c[6] = (p) => o.smsNotifications = p),
                  type: "checkbox"
                }, null, 512), [
                  [Qe, o.smsNotifications]
                ])
              ]),
              l("div", ea, [
                c[20] || (c[20] = l("label", null, "Marketing xabarlari", -1)),
                L(l("input", {
                  "onUpdate:modelValue": c[7] || (c[7] = (p) => o.marketingEmails = p),
                  type: "checkbox"
                }, null, 512), [
                  [Qe, o.marketingEmails]
                ])
              ])
            ]),
            l("button", {
              class: "save-settings-btn",
              onClick: m
            }, " Sozlamalarni saqlash ")
          ])
        ])
      ]);
    };
  }
}), sa = /* @__PURE__ */ Yt(na, [["__scopeId", "data-v-baeebb62"]]), oa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: sa
}, Symbol.toStringTag, { value: "Module" })), ia = { class: "client-orders" }, ra = { class: "orders-filters" }, aa = { class: "filter-group" }, la = { class: "filter-group" }, ca = { class: "orders-list" }, ua = { class: "order-header" }, da = { class: "order-id" }, fa = { class: "order-date" }, pa = { class: "order-items" }, ha = ["src", "alt"], ma = { class: "item-details" }, va = { class: "order-footer" }, ga = { class: "order-total" }, _a = { class: "order-actions" }, ya = ["onClick"], ba = ["onClick"], Ea = ["onClick"], Na = {
  key: 0,
  class: "no-orders"
}, wa = /* @__PURE__ */ xt({
  __name: "ClientOrders",
  setup(t) {
    const e = me(), n = z(""), s = z(""), o = bt(() => {
      let f = e.orders;
      if (n.value && (f = f.filter((d) => d.status === n.value)), s.value) {
        const d = new Date(s.value);
        f = f.filter((p) => new Date(p.date).toDateString() === d.toDateString());
      }
      return f;
    });
    ze(() => {
      e.fetchOrders();
    });
    const i = (f) => new Intl.DateTimeFormat("uz-UZ", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    }).format(f), r = (f) => ({
      pending: "Kutilmoqda",
      processing: "Jarayonda",
      shipped: "Yuborildi",
      delivered: "Yetkazildi",
      cancelled: "Bekor qilindi"
    })[f] || f, a = () => {
    }, u = () => {
      e.addNotification("Yangi buyurtma sahifasiga o'tilmoqda...");
    }, m = (f) => {
      confirm("Buyurtmani bekor qilishni xohlaysizmi?") && (e.cancelOrder(f), e.addNotification("Buyurtma bekor qilindi"));
    }, h = (f) => {
      e.addNotification(`Buyurtma #${f} batafsil ma'lumotlari`);
    }, c = (f) => {
      e.reorderItems(f), e.addNotification("Buyurtma qayta berildi");
    };
    return (f, d) => (b(), S("div", ia, [
      l("div", { class: "orders-header" }, [
        d[2] || (d[2] = l("h1", null, "Mening Buyurtmalarim", -1)),
        l("button", {
          class: "new-order-btn",
          onClick: u
        }, " + Yangi buyurtma ")
      ]),
      l("div", ra, [
        l("div", aa, [
          d[4] || (d[4] = l("label", null, "Status bo'yicha filtr:", -1)),
          L(l("select", {
            "onUpdate:modelValue": d[0] || (d[0] = (p) => n.value = p),
            onChange: a
          }, [...d[3] || (d[3] = [
            an('<option value="" data-v-395260f5> Barcha statuslar </option><option value="pending" data-v-395260f5> Kutilmoqda </option><option value="processing" data-v-395260f5> Jarayonda </option><option value="shipped" data-v-395260f5> Yuborildi </option><option value="delivered" data-v-395260f5> Yetkazildi </option><option value="cancelled" data-v-395260f5> Bekor qilindi </option>', 6)
          ])], 544), [
            [cn, n.value]
          ])
        ]),
        l("div", la, [
          d[5] || (d[5] = l("label", null, "Sana bo'yicha:", -1)),
          L(l("input", {
            "onUpdate:modelValue": d[1] || (d[1] = (p) => s.value = p),
            type: "date",
            onChange: a
          }, null, 544), [
            [St, s.value]
          ])
        ])
      ]),
      l("div", ca, [
        (b(!0), S(tt, null, Ft(o.value, (p) => (b(), S("div", {
          key: p.id,
          class: "order-card"
        }, [
          l("div", ua, [
            l("div", da, [
              l("strong", null, "Buyurtma #" + C(p.id), 1)
            ]),
            l("div", fa, C(i(p.date)), 1),
            l("div", {
              class: Nt(["order-status", p.status])
            }, C(r(p.status)), 3)
          ]),
          l("div", pa, [
            (b(!0), S(tt, null, Ft(p.items, (k) => (b(), S("div", {
              key: k.id,
              class: "order-item"
            }, [
              k.image ? (b(), S("img", {
                key: 0,
                src: k.image,
                alt: k.name,
                class: "item-image"
              }, null, 8, ha)) : X("", !0),
              l("div", ma, [
                l("h4", null, C(k.name), 1),
                l("p", null, "Miqdor: " + C(k.quantity), 1),
                l("p", null, "Narx: $" + C(k.price), 1)
              ])
            ]))), 128))
          ]),
          l("div", va, [
            l("div", ga, [
              l("strong", null, "Jami: $" + C(p.total), 1)
            ]),
            l("div", _a, [
              p.status === "pending" ? (b(), S("button", {
                key: 0,
                class: "cancel-btn",
                onClick: (k) => m(p.id)
              }, " Bekor qilish ", 8, ya)) : X("", !0),
              l("button", {
                class: "details-btn",
                onClick: (k) => h(p.id)
              }, " Batafsil ", 8, ba),
              p.status === "delivered" ? (b(), S("button", {
                key: 1,
                class: "reorder-btn",
                onClick: (k) => c(p.id)
              }, " Qayta buyurtma berish ", 8, Ea)) : X("", !0)
            ])
          ])
        ]))), 128))
      ]),
      o.value.length === 0 ? (b(), S("div", Na, [
        d[6] || (d[6] = l("div", { class: "no-orders-icon" }, " 📦 ", -1)),
        d[7] || (d[7] = l("h3", null, "Buyurtmalar topilmadi", -1)),
        d[8] || (d[8] = l("p", null, "Hali hech qanday buyurtma yo'q yoki filterga mos keluvchi buyurtma topilmadi.", -1)),
        l("button", {
          class: "new-order-btn",
          onClick: u
        }, " Birinchi buyurtmani bering ")
      ])) : X("", !0)
    ]));
  }
}), Oa = /* @__PURE__ */ Yt(wa, [["__scopeId", "data-v-395260f5"]]), Sa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Oa
}, Symbol.toStringTag, { value: "Module" })), Da = { class: "client-support" }, ka = { class: "support-content" }, Ca = { class: "support-form" }, Va = { class: "form-group" }, $a = { class: "form-group" }, xa = { class: "form-group" }, Pa = { class: "form-group" }, Ta = ["disabled"], Ra = { key: 0 }, Ia = { key: 1 }, ja = { class: "faq-section" }, qa = { class: "faq-list" }, Ma = ["onClick"], Aa = { class: "faq-question" }, za = {
  key: 0,
  class: "faq-answer"
}, Ba = { class: "my-tickets" }, Ha = {
  key: 0,
  class: "no-tickets"
}, Fa = {
  key: 1,
  class: "tickets-list"
}, Ua = { class: "ticket-header" }, Ka = { class: "ticket-id" }, La = { class: "ticket-content" }, Wa = { class: "ticket-actions" }, Ya = ["onClick"], Ja = /* @__PURE__ */ xt({
  __name: "ClientSupport",
  setup(t) {
    const e = me(), n = z(!1), s = Ht({
      subject: "",
      priority: "",
      message: "",
      attachments: []
    }), o = z([
      {
        id: 1,
        question: "Buyurtmamni qanday bekor qila olaman?",
        answer: `Buyurtmani "Kutilmoqda" statusida bo'lganda bekor qilish mumkin. Buyurtmalar sahifasiga o'ting va "Bekor qilish" tugmasini bosing.`,
        isOpen: !1
      },
      {
        id: 2,
        question: "To'lovni qanday qilishim mumkin?",
        answer: "Biz bank kartalari, PayPal, naqd pul va bank o'tkazmalarini qabul qilamiz. Barcha to'lovlar xavfsiz tarzda amalga oshiriladi.",
        isOpen: !1
      },
      {
        id: 3,
        question: "Yetkazib berish qancha vaqt oladi?",
        answer: "Oddiy yetkazib berish 3-5 ish kuni, tezkor yetkazib berish 1-2 ish kuni davom etadi.",
        isOpen: !1
      },
      {
        id: 4,
        question: "Mahsulotni qaytarish mumkinmi?",
        answer: "Ha, 30 kun ichida mahsulotni qaytarish mumkin. Mahsulot asl holatida bo'lishi kerak.",
        isOpen: !1
      },
      {
        id: 5,
        question: "Parolimni unutdim, nima qilishim kerak?",
        answer: `Kirish sahifasida "Parolni unutdim" tugmasini bosing va ko'rsatmalarga amal qiling.`,
        isOpen: !1
      }
    ]);
    ze(() => {
      e.fetchSupportTickets();
    });
    const i = async () => {
      n.value = !0;
      try {
        await e.submitSupportRequest({
          subject: s.subject,
          priority: s.priority,
          message: s.message,
          attachments: s.attachments
        }), Object.assign(s, {
          subject: "",
          priority: "",
          message: "",
          attachments: []
        }), e.addNotification("So'rov muvaffaqiyatli yuborildi");
      } catch {
        e.addNotification("Xatolik yuz berdi. Qayta urinib ko'ring.");
      } finally {
        n.value = !1;
      }
    }, r = (f) => {
      const d = f.target;
      d.files && (s.attachments = Array.from(d.files));
    }, a = () => {
      e.addNotification("Chat oynasi ochilmoqda...");
    }, u = (f) => {
      const d = o.value.find((p) => p.id === f);
      d && (d.isOpen = !d.isOpen);
    }, m = (f) => ({
      open: "Ochiq",
      in_progress: "Jarayonda",
      resolved: "Hal qilindi",
      closed: "Yopildi"
    })[f] || f, h = (f) => {
      e.addNotification(`So'rov #${f} ko'rilmoqda`);
    }, c = (f) => new Intl.DateTimeFormat("uz-UZ", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    }).format(f);
    return (f, d) => (b(), S("div", Da, [
      d[21] || (d[21] = l("div", { class: "support-header" }, [
        l("h1", null, "Qo'llab-quvvatlash"),
        l("p", null, "Sizga qanday yordam bera olamiz?")
      ], -1)),
      l("div", ka, [
        l("div", { class: "contact-methods" }, [
          d[9] || (d[9] = l("h2", null, "Biz bilan bog'lanish", -1)),
          l("div", { class: "contact-grid" }, [
            d[7] || (d[7] = l("div", { class: "contact-card" }, [
              l("div", { class: "contact-icon" }, " 📞 "),
              l("h3", null, "Telefon"),
              l("p", null, "+998 90 123 45 67"),
              l("p", null, "Dushanba-Juma: 9:00-18:00"),
              l("button", { class: "contact-btn" }, " Qo'ng'iroq qilish ")
            ], -1)),
            l("div", { class: "contact-card" }, [
              d[3] || (d[3] = l("div", { class: "contact-icon" }, " 💬 ", -1)),
              d[4] || (d[4] = l("h3", null, "Chat", -1)),
              d[5] || (d[5] = l("p", null, "Tez yordam olish uchun", -1)),
              d[6] || (d[6] = l("p", null, "24/7 mavjud", -1)),
              l("button", {
                class: "contact-btn",
                onClick: a
              }, " Chat boshlash ")
            ]),
            d[8] || (d[8] = l("div", { class: "contact-card" }, [
              l("div", { class: "contact-icon" }, " 📧 "),
              l("h3", null, "Email"),
              l("p", null, "support@company.com"),
              l("p", null, "24 soat ichida javob"),
              l("button", { class: "contact-btn" }, " Email yuborish ")
            ], -1))
          ])
        ]),
        l("div", Ca, [
          d[17] || (d[17] = l("h2", null, "Yordam so'rash", -1)),
          l("form", {
            onSubmit: Hi(i, ["prevent"])
          }, [
            l("div", Va, [
              d[11] || (d[11] = l("label", { for: "subject" }, "Mavzu", -1)),
              L(l("select", {
                id: "subject",
                "onUpdate:modelValue": d[0] || (d[0] = (p) => s.subject = p),
                required: ""
              }, [...d[10] || (d[10] = [
                an('<option value="" data-v-94bc6f31> Mavzuni tanlang </option><option value="order" data-v-94bc6f31> Buyurtma bilan bog&#39;liq </option><option value="payment" data-v-94bc6f31> To&#39;lov muammosi </option><option value="account" data-v-94bc6f31> Hisob sozlamalari </option><option value="technical" data-v-94bc6f31> Texnik muammo </option><option value="other" data-v-94bc6f31> Boshqa </option>', 6)
              ])], 512), [
                [cn, s.subject]
              ])
            ]),
            l("div", $a, [
              d[13] || (d[13] = l("label", { for: "priority" }, "Muhimlik darajasi", -1)),
              L(l("select", {
                id: "priority",
                "onUpdate:modelValue": d[1] || (d[1] = (p) => s.priority = p),
                required: ""
              }, [...d[12] || (d[12] = [
                an('<option value="" data-v-94bc6f31> Muhimlik darajasini tanlang </option><option value="low" data-v-94bc6f31> Past </option><option value="medium" data-v-94bc6f31> O&#39;rta </option><option value="high" data-v-94bc6f31> Yuqori </option><option value="urgent" data-v-94bc6f31> Shoshilinch </option>', 5)
              ])], 512), [
                [cn, s.priority]
              ])
            ]),
            l("div", xa, [
              d[14] || (d[14] = l("label", { for: "message" }, "Xabar", -1)),
              L(l("textarea", {
                id: "message",
                "onUpdate:modelValue": d[2] || (d[2] = (p) => s.message = p),
                rows: "6",
                placeholder: "Muammoingizni batafsil tasvirlab bering...",
                required: ""
              }, null, 512), [
                [St, s.message]
              ])
            ]),
            l("div", Pa, [
              d[15] || (d[15] = l("label", { for: "attachment" }, "Fayl biriktirish (ixtiyoriy)", -1)),
              l("input", {
                id: "attachment",
                type: "file",
                multiple: "",
                accept: ".jpg,.jpeg,.png,.pdf,.doc,.docx",
                onChange: r
              }, null, 32),
              d[16] || (d[16] = l("small", null, "JPG, PNG, PDF, DOC fayllarini yuklash mumkin", -1))
            ]),
            l("button", {
              type: "submit",
              class: "submit-btn",
              disabled: n.value
            }, [
              n.value ? (b(), S("span", Ra, "Yuborilmoqda...")) : (b(), S("span", Ia, "Xabar yuborish"))
            ], 8, Ta)
          ], 32)
        ]),
        l("div", ja, [
          d[18] || (d[18] = l("h2", null, "Ko'p so'raladigan savollar", -1)),
          l("div", qa, [
            (b(!0), S(tt, null, Ft(o.value, (p) => (b(), S("div", {
              key: p.id,
              class: "faq-item",
              onClick: (k) => u(p.id)
            }, [
              l("div", Aa, [
                l("h3", null, C(p.question), 1),
                l("span", {
                  class: Nt(["faq-toggle", { active: p.isOpen }])
                }, "+", 2)
              ]),
              p.isOpen ? (b(), S("div", za, [
                l("p", null, C(p.answer), 1)
              ])) : X("", !0)
            ], 8, Ma))), 128))
          ])
        ]),
        l("div", Ba, [
          d[20] || (d[20] = l("h2", null, "Mening so'rovlarim", -1)),
          w(e).supportTickets.length === 0 ? (b(), S("div", Ha, [...d[19] || (d[19] = [
            l("p", null, "Hali hech qanday so'rov yuborilmagan", -1)
          ])])) : (b(), S("div", Fa, [
            (b(!0), S(tt, null, Ft(w(e).supportTickets, (p) => (b(), S("div", {
              key: p.id,
              class: "ticket-card"
            }, [
              l("div", Ua, [
                l("div", Ka, " #" + C(p.id), 1),
                l("div", {
                  class: Nt(["ticket-status", p.status])
                }, C(m(p.status)), 3)
              ]),
              l("div", La, [
                l("h4", null, C(p.subject), 1),
                l("p", null, C(p.message.substring(0, 100)) + "...", 1),
                l("small", null, C(c(p.createdAt)), 1)
              ]),
              l("div", Wa, [
                l("button", {
                  class: "view-btn",
                  onClick: (k) => h(p.id)
                }, " Ko'rish ", 8, Ya)
              ])
            ]))), 128))
          ]))
        ])
      ])
    ]));
  }
}), Ga = /* @__PURE__ */ Yt(Ja, [["__scopeId", "data-v-94bc6f31"]]), Qa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ga
}, Symbol.toStringTag, { value: "Module" }));
function Za() {
  return [
    {
      path: "",
      name: "client-home",
      component: () => Promise.resolve().then(() => Or)
    },
    {
      path: "profile",
      name: "client-profile",
      component: () => Promise.resolve().then(() => oa)
    },
    {
      path: "orders",
      name: "client-orders",
      component: () => Promise.resolve().then(() => Sa)
    },
    {
      path: "support",
      name: "client-support",
      component: () => Promise.resolve().then(() => Qa)
    }
  ];
}
export {
  wr as ClientHome,
  Xa as ClientLayout,
  Oa as ClientOrders,
  sa as ClientProfile,
  Ga as ClientSupport,
  Za as getClientRoutes,
  me as useClientStore
};
