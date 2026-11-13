---
tag: VG1ZW3WGZM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=138806
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all functions $f: \mathbf{Z} \rightarrow \mathbf{Z}$, satisfying:
(1) For any integer $x, f(f(x))=x$;
(2) For any integers $x, y$, if $x+y$ is odd then $f(x)+f(y) \geqslant x+y$.
