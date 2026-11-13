---
tag: KRASYCDRPC
kind: problem
type: answer
answer: a) 421; b) 281
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Vietnam/train/0000.parquet#row=140
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: vn-vmo
    source: hf-mathnet
    label: Vietnam Vietnamese Mathematical Competitions
---
Let be given an alphabet consisting of $29$ characters. A sequence of characters is called word. For each positive integer $n$, let $X_n$ be the set all words with $n$ characters. Consider function $f: X_n \to X_2$ defined as follow: for each word from $X_n$, we erase any $n-2$ characters in this word to get a word from $X_2$. For each such function, let $V(f)$ be the set of all values of $f$. Find the minimal value of $|V(f)|$ in following cases:

a) $n=3$.

b) $n = 4$.
