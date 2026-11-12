---
tag: 7TH9R3JQGV
kind: problem
type: answer
answer: f(x)=x+,f(x)=-x+
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=4594
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We will call a function $f$ good if

- $f$ is defined on the interval $[0,1]$ and takes real values;
- for all $x, y \in[0,1]$ it holds that $|x-y|^{2} \leqslant|f(x)-f(y)| \leqslant|x-y|$.

Find all good functions.
