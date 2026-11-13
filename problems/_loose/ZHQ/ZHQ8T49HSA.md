---
tag: ZHQ8T49HSA
kind: problem
type: answer
answer: \sqrt{1 - a^2} + \sqrt{1 - b^2} + \sqrt{1 - c^2} \le \frac{3\sqrt{3}}{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=248288
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Real numbers $a,b,c$ with $0\le a,b,c\le 1$ satisfy the condition
$$a+b+c=1+\sqrt{2(1-a)(1-b)(1-c)}.$$
Prove that
$$\sqrt{1-a^2}+\sqrt{1-b^2}+\sqrt{1-c^2}\le \frac{3\sqrt 3}{2}.$$

* (Nora Gavrea)*
