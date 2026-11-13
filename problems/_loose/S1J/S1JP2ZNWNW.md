---
tag: S1JP2ZNWNW
kind: problem
type: answer
answer: "0"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=216009
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$f$ is a differentiable function such that $f(f(x))=x$ where $x \in [0,1]$.Also $f(0)=1$.Find the value of

$$\int_0^1(x-f(x))^{2016}dx$$
