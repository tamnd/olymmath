---
tag: BN86ZQWA8P
kind: problem
type: answer
answer: no such function
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ukraine/train/0001.parquet#row=20
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ua-umo
    source: hf-mathnet
    label: Ukraine UkraineMO
---
Determine all strictly increasing functions $f: \mathbb{R} \to \mathbb{R}$ that satisfies the conditions:
$$
\bullet f(x^3 + y^2 + f(y)) = x^2 f(x) + y f(y) + y;
$$
$$ \bullet \text{Equality } y^2 + f(y) = t \text{ has a solution for every } t \in \mathbb{R}. $$
