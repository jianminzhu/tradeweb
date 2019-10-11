import { Decimal } from "Decimal.js";


const enum CODE {
    NAS = "NAS",
    DAX = "DAX",
    HIS = "HIS",
    CL = "CL",
    NQ = "NQ",
    GC = "GC",
    YM = "YM",
    HG = "HG",
}

const enum UPDOWN {
    UP = "UP",
    DOWN = "DOWN"
}

class KUtil {
    constructor(
        public gheigh,
        public g191,
        public g382,
        public g5,
        public g618,
        public g809,
        public glow) {
    }

    static ext618(arr) {
        let heigh = new Decimal(Math.max.apply(Math, arr));
        let low = new Decimal(Math.min.apply(Math, arr))
        let qujian = heigh.minus(low)
        let m191 = heigh.minus(qujian.mul(0.191))
        let m382 = heigh.minus(qujian.mul(0.382))
        let m5 = heigh.minus(qujian.mul(0.5))
        let m618 = heigh.minus(qujian.mul(0.618))
        let m809 = heigh.minus(qujian.mul(0.809))
        return new KUtil(heigh, m191, m382, m5, m618, m809, low)
    }

    static fixNas (it, dr) {
        return KUtil.fixExt(it, null, dr, CODE.NAS);
    }

    static fix(it , fix,dr) {
        return KUtil.fixExt(it, fix, dr, null);
    }

    static fixExt (it, fix , dr, code: CODE) {
        if (code == CODE.NAS) {
            return eval("new " + code + "().fix(it,dr)");
        } else {
            return it.toFixed(fix, dr)
        }
    }
}

interface ExtFix {
    fix(it, dr: Decimal.Rounding);
}

class NAS implements ExtFix {
    fix(itVal, dr) {
        let fix = 2;
        let step = 25;
        let arr = new Decimal(itVal).toString().split(".")
        let itemRound = new Decimal(arr[0]);
        let per = new Decimal((arr[1] || "0").substr(0, fix))
        if (per.mod(step).eq(0)) {
            return itemRound.plus("0."+per.toString());
        } else {
            let item = 1
            if (dr == Decimal.ROUND_DOWN) {
                item = 0
            }
            let perItem = per.divToInt(step).plus(item).mul(0.25);
            return  itemRound.plus(perItem)
        }
    }
}

var it=KUtil.fixNas(new Decimal(7676.74),Decimal.ROUND_DOWN)
console.log(it.toFixed(2).toString())
console.log("dddddddddddddddd") 