---
tag: DACKB0X6C2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2008 Irish Math Olympiad
    url: https://artofproblemsolving.com/community/c6h204313
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44880
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=241118
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ie-irmo/2008
    source: hf-ai-mo-aops
    label: 2008 Irish Math Olympiad
---
Suppose that $ x, y$ and $ z$ are positive real numbers such that $ xyz \ge 1$ .

(a) Prove that
$ 27 \le (1 + x + y)^2 + (1+ x + z)^2 + (1 + y + z)^2$ ,
with equality if and only if $ x = y = z = 1$ .

(b) Prove that
$ (1 + x + y)^2 + (1+ x + z)^2 + (1 + y + z)^2$ $ \le 3(x + y + z)^2$ ,
with equality if and only if $ x = y = z = 1$ .
