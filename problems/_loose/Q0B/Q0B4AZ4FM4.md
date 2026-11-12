---
tag: Q0B4AZ4FM4
kind: problem
type: answer
answer: 0.27,0.02,0.35
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=30396
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A factory produces a certain type of product; each product has a defect with a probability of $p_{1}=0.1$. Each product is inspected by one inspector; he detects an existing defect with a probability of $p_{2}=0.8$, and if the defect is not detected, the product is released into the finished product. In addition, the inspector may incorrectly reject a product that does not have a defect; the probability of this is $p_{3}=0.3$. Find the probabilities of the following events:

$A_{1}$ - the product will be incorrectly rejected;

$A_{2}$ - the product will be released into the finished product with a defect;

$A_{3}$ - the product will be rejected.
