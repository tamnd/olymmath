---
tag: ZFQN2TSYX4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250725
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0000.parquet#row=355
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: sa-samc
    source: hf-mathnet
    label: Saudi Arabia SAUDI ARABIAN MATHEMATICAL COMPETITIONS
---
Let $n \ge 1$ be a fixed positive integer. We consider all the sets $S$ which consist of sub-sequences of the sequence $0, 1,2, ..., n$ satisfying the following conditions:
i) If $(a_i)_{i=0}^k$ belongs to $S$, then $a_0 = 0$, $a_k = n$ and $a_{i+1} - a_i \le 2$ for all $0 \le i \le k - 1$.
ii) If $(a_i)_{i=0}^k$ and $(b_j)^h_{j=0}$ both belong to $S$, then there exist $0 \le i_0 \le k - 1$ and $0 \le j_0 \le h - 1$ such that $a_{i_0} = b_{j_0}$ and $a_{i_0+1} = b_{j_0+1}$.
Find the maximum value of $|S|$ (among all the above-mentioned sets $S$).
