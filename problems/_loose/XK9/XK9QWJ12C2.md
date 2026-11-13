---
tag: XK9QWJ12C2
kind: problem
type: answer
answer: f(x) = \sin x + \cos x
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=241926
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the condition of $a,b$ for which the function $f(x)\ (0\leq x\leq 2\pi)$ satisfying the following equality can be determined uniquely,then determine $f(x)$, assuming that $f(x) $ is a continuous function at $0\leq x\leq 2\pi$.

$$f(x)=\frac{a}{2\pi}\int_0^{2\pi} \sin (x+y)f(y)dy+\frac{b}{2\pi}\int_0^{2\pi} \cos (x-y)f(y)dy+\sin x+\cos x$$
