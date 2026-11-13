---
tag: 6BMB55MQKZ
kind: problem
type: answer
answer: x^3 - 3x - 1 and x^3 - 3x + 1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Belarus/train/0000.parquet#row=120
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: by-mo/2012
    source: hf-mathnet
    label: Belarus Belorusija 2012
---
A cubic trinomial $x^3 + px + q$ with integer coefficients $p$ and $q$ is said to be *irrational* if it has three pairwise distinct real irrational roots $\alpha_1$, $\alpha_2$, $\alpha_3$.
Find all irrational cubic trinomials for which the value of $|\alpha_1| + |\alpha_2| + |\alpha_3|$ is the minimal possible.
