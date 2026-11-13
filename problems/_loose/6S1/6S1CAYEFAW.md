---
tag: 6S1CAYEFAW
kind: problem
type: answer
answer: \frac{4}{3} \leq f\left(\frac{1}{2}\right) \leq \frac{4}{3}\sqrt{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=237575
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Define a function $f$ on positive real numbers to satisfy
$$f(1)=1 , f(x+1)=xf(x) \textrm{ and } f(x)=10^{g(x)},$$
where $g(x) $ is a function defined on real numbers and for all real numbers $y,z$ and $0\leq t \leq 1$, it satisfies
$$g(ty+(1-t)z) \leq tg(y)+(1-t)g(z).$$
(1) Prove: for any integer $n$ and $0 \leq t \leq 1$, we have
$$t[g(n)-g(n-1)] \leq g(n+t)-g(n) \leq t[g(n+1)-g(n)].$$
(2) Prove that $$\frac{4}{3} \leq f(\frac{1}{2}) \leq \frac{4}{3} \sqrt{2}.$$
