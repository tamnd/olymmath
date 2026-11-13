---
tag: YEZ8BAZTR4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2018 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1734508
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=16864
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=218503
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2018
    source: hf-ai-mo-aops
    label: 2018 Online Math Open Problems
---
Let $p = 2027$ be the smallest prime greater than $2018$ , and let $P(X) = X^{2031}+X^{2030}+X^{2029}-X^5-10X^4-10X^3+2018X^2$ . Let $\mathrm{GF}(p)$ be the integers modulo $p$ , and let $\mathrm{GF}(p)(X)$ be the set of rational functions with coefficients in $\mathrm{GF}(p)$ (so that all coefficients are taken modulo $p$ ). That is, $\mathrm{GF}(p)(X)$ is the set of fractions $\frac{P(X)}{Q(X)}$ of polynomials with coefficients in $\mathrm{GF}(p)$ , where $Q(X)$ is not the zero polynomial. Let $D\colon \mathrm{GF}(p)(X)\to \mathrm{GF}(p)(X)$ be a function satisfying $$
D\left(\frac fg\right) = \frac{D(f)\cdot g - f\cdot D(g)}{g^2}
$$for any $f,g\in \mathrm{GF}(p)(X)$ with $g\neq 0$ , and such that for any nonconstant polynomial $f$ , $D(f)$ is a polynomial with degree less than that of $f$ . If the number of possible values of $D(P(X))$ can be written as $a^b$ , where $a$ , $b$ are positive integers with $a$ minimized, compute $ab$ .

*Proposed by Brandon Wang*
