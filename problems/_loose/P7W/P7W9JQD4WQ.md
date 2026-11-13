---
tag: P7W9JQD4WQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2007 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h247841
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35899
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=234366
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/2007
    source: hf-ai-mo-aops
    label: 2007 China Team Selection Test
---
A rational number $ x$ is called *good* if it satisfies: $ x=\frac{p}{q}>1$ with $ p$ , $ q$ being positive integers, $ \gcd (p,q)=1$ and there exists constant numbers $ \alpha$ , $ N$ such that for any integer $ n\geq N$ , $$ |\{x^n\}-\alpha|\leq\dfrac{1}{2(p+q)}$$ Find all the good numbers.
