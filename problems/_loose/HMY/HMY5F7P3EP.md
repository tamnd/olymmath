---
tag: HMY5F7P3EP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=208132
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\Lambda$ be the set of points in the plane whose coordinates are integers and let $F$ be the collection of all functions from $\Lambda$ to $\{1,-1\}.$ We call a function $f$ in $F$ *perfect* if every function $g$ in $F$ that differs from $f$ at finitely many points satisfies the condition
$$ \sum_{0<d(P,Q)<2010} \frac{f(P)f(Q)-g(P)g(Q)}{d(P,Q)} \geq 0 $$
where $d(P,Q)$ denotes the distance between $P$ and $Q.$ Show that there exist infinitely many *perfect* functions that are not translates of each other.
