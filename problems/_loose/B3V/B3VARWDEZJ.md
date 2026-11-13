---
tag: B3VARWDEZJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2015 Caucasus Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h1828605
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=21965
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=223230
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: caucasus/2015
    source: hf-ai-mo-aops
    label: 2015 Caucasus Mathematical Olympiad
---
Let's call a natural number a palindrome, the decimal notation of which is equally readable from left to right and right to left (decimal notation cannot start from zero; for example, the number $1221$ is a palindrome, but the numbers $1231, 1212$ and $1010$ are not). Which palindromes among the numbers from $10,000$ to $999,999$ have an odd sum of digits, which have an one even, and how many times are the ones with odd sum more than the ones with the even sum?
