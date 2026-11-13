---
tag: PD47W1YTH3
kind: problem
type: answer
answer: \mu(A) \geq \frac{1}{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=269297
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f:[0,1]\to\mathbb R$ be a continuous function such that $f(0)=f(1)=0$. Prove that the set
$$A:=\{h\in[0,1]:f(x+h)=f(x)\text{ for some }x\in[0,1]\}$$is Lebesgue measureable and has Lebesgue measure at least $\frac12$.
