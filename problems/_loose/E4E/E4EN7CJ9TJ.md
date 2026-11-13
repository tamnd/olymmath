---
tag: E4EN7CJ9TJ
kind: problem
type: answer
answer: 'For r = 3: (2^{2013} + 5·2^{287})/7. For r in {1, 2, 4, 5, 6}: (2^{2013} − 2^{288})/7.'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Mongolia/train/0000.parquet#row=44
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: mn-mo
    source: hf-mathnet
    label: Mongolia 46th Mongolian Mathematical Olympiad
---
Denote by $d(A)$ the sum of all the elements of $A$ (if $A = \emptyset$, $d(A) = 0$). Let $S = \{1, 2, \dots, 2013\}$ and
$$
T_r = \{T \mid T \subseteq S, d(T) \equiv r \pmod 7\},
$$
for $r = 1, 2, \dots, 6$. Find the number of elements of $T_r$ for each $r$.
