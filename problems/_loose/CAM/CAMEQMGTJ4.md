---
tag: CAMEQMGTJ4
kind: problem
type: answer
answer: f(x)=1-\frac{x^{2}}{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=133610
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given that $f(x)$ is a function defined on $\mathbf{R}$, for any $x, y \in \mathbf{R}$, it always holds that
$$
f(x-f(y))=f(f(y))+x f(y)+f(x)-1 .
$$

Find $f(x)$, and calculate the value of $f(\sqrt{2014})$. ${ }^{[1]}$
(2014, Beijing High School Mathematics Competition (Grade 10))
