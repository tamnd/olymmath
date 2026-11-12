---
tag: 8HT3CMY8S3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=34039
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $X$ and $Y$ be independent random variables, $f(x)=f_{1}(x)+i f_{2}(x), g(x)=g_{1}(x)+i g_{2}(x)$, where $f_{k}(x), g_{k}(x)$ are Borel functions, $k=1,2$. Show that if $\mathrm{E}|f(X)|<\infty, \mathrm{E}|g(Y)|<\infty$, then

$$
\mathrm{E}|f(X) g(Y)|<\infty \text { and } \mathrm{E} f(X) g(Y)=\mathrm{E} f(X) \cdot \mathrm{E} g(Y) .
$$

Remark. By definition, if $h(x)=u(x)+i v(x)$, where $u(x)$, $v(x)$ are Borel functions with values in $\mathbb{R}$, then

$$
\mathrm{E} h(X)=\mathrm{E} u(X)+i \mathrm{E} v(X), \mathrm{E}|h(X)|=\mathrm{E} \sqrt{u^{2}(X)+v^{2}(X)}
$$
