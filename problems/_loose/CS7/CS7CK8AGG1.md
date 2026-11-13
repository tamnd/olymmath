---
tag: CS7CK8AGG1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=95177
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$31 .^{+}$ Yes. To prove this conclusion, first prove that every connected graph $G$ contains a path, the deletion of which increases the pathwidth of $G$. (Use a path decomposition of $G$ to find this path.) Then construct a sequence of trees $T_{1}, T_{2}, \ldots$ such that deleting such a path from $T_{n+1}$ leaves a part that contains $T_{n}$. Finally, inductively assume that $T_{n}$ has a large pathwidth.
