---
tag: SJ1G0YXSNC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=17421
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Sasha writes down 30 different natural numbers $a_{1}, a_{2}, \ldots, a_{30}$. Olya computes the GCD or LCM of numbers $a_{1}$ and $a_{2}$, then the GCD or LCM of the obtained result and number $a_{3}$, and so on, until she computes the GCD or LCM of the previous result and number $a_{30}$. In the process, she must compute the LCM exactly 2 times out of all 29 operations. Can Sasha write down such numbers that the final result will be 300 regardless of Olya's actions?
