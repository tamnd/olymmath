---
tag: T3E5N85KDX
kind: problem
type: answer
answer: 1000!^2 * 12^{1000}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Brazil/train/0001.parquet#row=107
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: br-obm
    source: hf-mathnet
    label: Brazil XXII OBM
---
Let $X$ be the set of all sequences $a = (a_1, a_2, \dots, a_{2000})$ such that $a_i \in \{0, 1, 2\}$ for $1 \le i \le 1000$ and $a_i \in \{0, 1\}$ for $1001 \le i \le 2000$. Given $a, b$ in $X$, we define the distance $d(a, b)$ between $a$ and $b$ as the number of values for $i$, $1 \le i \le 2000$, for which $a_i \ne b_i$. Find the number of distance-preserving functions $f: X \to X$, i.e., such that $d(f(a), f(b)) = d(a, b)$ for all $a$ and $b$ in $X$.
