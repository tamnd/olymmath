---
tag: YS9MC0F5YC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250787
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0000.parquet#row=293
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: sa-samc/2015
    source: hf-mathnet
    label: Saudi Arabia SAMC 2015
---
The total number of languages used in KAUST is $n$. For each positive integer $k \le n$, let $A_k$ be the set of all those people in KAUST who can speak at least $k$ languages; and let $B_k$ be the set of all people $P$ in KAUST with the property that, for any $k$ pairwise different languages (used in KAUST), $P$ can speak at least one of these $k$ languages. Prove that
(a) If $2k \ge n + 1$ then $A_k \subseteq B_k$
(b) If $2k \le n + 1$ then $A_k \supseteq B_k.$

Nguyễn Duy Thái Sơn
