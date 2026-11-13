---
tag: Y4M8CEECHX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Mongolia/train/0001.parquet#row=283
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: mn-mo/2025
    source: hf-mathnet
    label: Mongolia MMO2025 Round 2
---
Let $w_1 = a$, $w_2 = b$, and let the sequence of words ($w_n$) be defined recursively as follows:
$$
w_3 = ab, w_4 = bab, w_5 = abbab, w_6 = bababbab, \dots,
$$
where each term is formed by concatenating the previous two terms, that is, $w_n = w_{n-2}w_{n-1}$ for all $n \ge 3$. Prove that for every $n \ge 3$, the word obtained by removing the first two letters from $w_n$ is a palindrome.
