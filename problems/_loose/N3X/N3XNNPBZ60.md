---
tag: N3XNNPBZ60
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0001.parquet#row=98
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $k \in \mathbb{N}$ and define the sets
$$A_k = \bigcup_{i=0}^{k+1} \{(m, n) \in \mathbb{N} \times \mathbb{N} \mid m \ge 2i,\ n \ge 2(k-i) + 1\},$$
$$B_k = \bigcup_{i=-1}^{k} \{(m, n) \in \mathbb{N} \times \mathbb{N} \mid m \ge 2i + 1,\ n \ge 2(k-i)\}.$$
Prove that
$$A_k \cup B_k = \{(m, n) \in \mathbb{N} \times \mathbb{N} \mid m + n \ge 2k + 1\},$$
$$A_k \cap B_k = \{(m, n) \in \mathbb{N} \times \mathbb{N} \mid m + n \ge 2k + 2\}.$$
