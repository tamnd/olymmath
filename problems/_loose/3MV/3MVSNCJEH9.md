---
tag: 3MVSNCJEH9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2002 National High School Mathematics League
    url: https://artofproblemsolving.com/community/c6h2028881
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=36280
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=234828
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-league/2002
    source: hf-ai-mo-aops
    label: 2002 National High School Mathematics League
---
Consider the area encircled by $x^2=4y,x^2=-4y,x=4,x=-4$ , rotate it around $y$ -axis, the volume of the revolved body is $V_1$ . Then consider the figure formed by all points $(x,y)$ that $x^2+y^2\leq16,x^2+(y-2)^2\geq4,x^2+(y-2)^2\geq4$ , rotate it around $y$ -axis, the volume of the revolved body is $V_2$ . The relationship between $V_1$ and $V_2$ is $\text{(A)}V_1=\frac{1}{2}V_2 \text{(B)}V_1=\frac{2}{3}V_2 \text{(C)}V_1=V_2 \text{(D)}V_1=2V_2$
