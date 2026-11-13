---
tag: WJ3K7KHF33
kind: problem
type: answer
answer: f(x) = x
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=247007
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the functions $ f:\mathbb{N}\longrightarrow\mathbb{N} $ that satisfy the following relation:
$$ \gcd\left( x,f(y)\right)\cdot\text{lcm}\left(f(x), y\right) = \gcd (x,y)\cdot\text{lcm}\left( f(x), f(y)\right) , \forall x,y\in\mathbb{N} . $$
