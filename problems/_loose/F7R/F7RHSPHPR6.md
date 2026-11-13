---
tag: F7RHSPHPR6
kind: problem
type: answer
answer: f(x, y) = \left| \frac{x - y}{2} \right|
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=239888
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine all functions $f: \mathbb{R} \times \mathbb{R} \to \mathbb{R}$ such that
$$ f(x,y) + f(y,z) + f(z,x) = \max \{ x,y,z \} - \min \{ x,y,z \} $$ for every $x,y,z \in \mathbb{R}$
and there exists some real $a$ such that $f(x,a) = f(a,x) $ for every $x \in \mathbb{R}$.
