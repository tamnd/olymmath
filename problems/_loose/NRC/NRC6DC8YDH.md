---
tag: NRC6DC8YDH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=122557
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Konya and Betya are dividing $2 n+1$ walnuts, $n \geqslant 2$, and each wants to get as many as possible. Assume there are three ways to divide (each way has three steps).
First step: Betya divides all the walnuts into two parts, each part having no less than two walnuts.
Second step: Konya then divides each part into two parts, each part having no less than 1 walnut (the first and second steps are the same for all three methods).

Third step: In the first method, Konya takes the largest and the smallest parts; in the second method, Konya takes the two medium parts; in the third method, Konya either takes the largest and the smallest parts or the two medium parts, but according to the rules, he must give one walnut to Betya.
Determine: which method is most advantageous for Konya, and which method is least advantageous for him.
