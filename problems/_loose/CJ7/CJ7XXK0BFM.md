---
tag: CJ7XXK0BFM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2008 Iran MO (2nd Round)
    url: https://artofproblemsolving.com/community/c6h368215
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44113
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240386
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo-r2/2008
    source: hf-ai-mo-aops
    label: 2008 Iran MO (2nd Round)
---
Let $a,b,c,$ and $d$ be real numbers such that at least one of $c$ and $d$ is non-zero. Let $ f:\mathbb{R}\to\mathbb{R}$ be a function defined as $f(x)=\frac{ax+b}{cx+d}$ . Suppose that for all $x\in\mathbb{R}$ , we have $f(x) \neq x$ . Prove that if there exists some real number $a$ for which $f^{1387}(a)=a$ , then for all $x$ in the domain of $f^{1387}$ , we have $f^{1387}(x)=x$ . Notice that in this problem,
$$f^{1387}(x)=\underbrace{f(f(\cdots(f(x)))\cdots)}_{\text{1387 times}}.$$

*Hint*. Prove that for every function $g(x)=\frac{sx+t}{ux+v}$ , if the equation $g(x)=x$ has more than $2$ roots, then $g(x)=x$ for all $x\in\mathbb{R}-\left\{\frac{-v}{u}\right\}$ .
