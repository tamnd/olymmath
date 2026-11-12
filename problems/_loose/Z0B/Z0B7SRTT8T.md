---
tag: Z0B7SRTT8T
kind: problem
type: answer
answer: 1/2;1;3/2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=5071
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Rewrite the equation as

$$
5^{(x-1)^{2}} \log _{7}\left((x-1)^{2}+2\right)=5^{2|x-a|} \log _{7}(2|x-a|+2)
$$

Let $f(t)=5^{t} \log _{7}(t+2)$. This function is increasing. Therefore,

$$
f\left((x-1)^{2}\right)=f(2|x-a|) \Longleftrightarrow(x-1)^{2}=2|x-a|
$$

There will be three solutions in the case of tangency for $a=1 / 2, a=3 / 2$ and when $a=1$, since the vertices of the parabola $y=(x-1)^{2}$ and the curve $y=|x-1|$ coincide.
