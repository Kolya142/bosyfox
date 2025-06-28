const bq_extends = [];

function BQ(arg) {
    let a = {};
    a.arg = arg;
    a.extend = () => {
	const ents = Object.entries(a.arg);
	for (let i = 0; i < ents.length; ++i) {
	    bq_extends.push(ents[i]);
	}
	return a;
    };
    for (let i = 0; i < bq_extends.length; ++i) {
        const extend = bq_extends[i];
        a[extend[0]] = (...args) => {return extend[1](a, args)};
    }
    return a;
}

BQ({
    nop: (a, e) => {return a;},
    dumpCmds: () => {BQ(bq_extends).print();},
    map: (a, e) => {
	const mapper = e[0];
	const l = a.arg.length;
	const d = [];
	for (let i = 0; i < l; ++i) {
	    d.push(mapper(a.arg[i]));
	}
	return d;
    },
    unwrap: (a, e) => {
	return a.arg;
    },
    methodGet: (a, e) => {
	const b = a.arg;
	a.arg = e[0];
	return a[b];
    },
    rmap: (a, e) => {
	const mapper = e[0];
	const l = a.arg.length;
	for (let i = 0; i < l; ++i) {
	    mapper(a.arg[i]);
	}
	return a;
    },
    print: (a, e) => {
	console.log(a.arg);
	return a;
    },
    add: (a, e) => {
	a.arg = a.arg + e[0];
	return a;
    },
    sub: (a, e) => {
	a.arg = a.arg - e[0];
	return a;
    },
    mul: (a, e) => {
	a.arg = a.arg * e[0];
	return a;
    },
    div: (a, e) => {
	a.arg = a.arg / e[0];
	return a;
    },
    even: (a, e) => {
	return !(a.arg % 2);
    },
    odd: (a, e) => {
	return a.arg % 2;
    }
}).extend();

export {BQ};
