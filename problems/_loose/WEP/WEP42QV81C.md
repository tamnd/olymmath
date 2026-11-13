---
tag: WEP42QV81C
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2011 Belarusian National Olympiad
    url: https://artofproblemsolving.com/community/c6h1220189
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=31249
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=230695
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: by-mo/2011
    source: hf-ai-mo-aops
    label: 2011 Belarusian National Olympiad
---
Real nonzero numbers $a,b,c (b>0)$ satisfy the condition that two distinct roots of the equation $ax^2+bx-c=0$ are also roots of the equation $x^3+bx^2+ax-c=0$ . Prove the inequalities:
a) $abc>16$ b) $abc\geq\frac{3125}{108}$
