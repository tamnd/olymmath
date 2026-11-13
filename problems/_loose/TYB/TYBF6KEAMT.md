---
tag: TYBF6KEAMT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: Russian TST 2018
    url: https://artofproblemsolving.com/community/c6h3042610
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=57207
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250026
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-tst/2018
    source: hf-ai-mo-aops
    label: Russian TST 2018
---
Let $a < b$ be positive integers. Prove that there is a positive integer $n{}$ and a polynomial of the form $$\pm1\pm x\pm x^2\pm\cdots\pm x^n,$$divisible by the polynomial $1+x^a+x^b$ .
