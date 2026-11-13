---
tag: MTVHJFK4P9
kind: problem
type: answer
answer: "9"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Croatia/train/0001.parquet#row=210
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hr-mo/2018
    source: hf-mathnet
    label: Croatia Croatia_2018
---
Let $S = \{0, 95\}$. In each step, Lucija is extending the set $S$ in the following way. She chooses a polynomial with coefficients in $S$, distinct from zero, and extends $S$ with all integer roots of a chosen polynomial. She repeats the procedure by choosing another polynomial with coefficients from the extended set $S$ as long as she can get new roots.
Prove that Lucija can, in a finite number of steps, extend the set $S$ up to the set which is no longer extensible. How many elements does the set $S$ have at the end?
