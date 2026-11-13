---
tag: 5K4CJ9GR7T
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2002 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h254163
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35784
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=234267
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/2002
    source: hf-ai-mo-aops
    label: 2002 China Team Selection Test
---
For positive integers $a,b,c$ let $ \alpha, \beta, \gamma$ be pairwise distinct positive integers such that
$$ \begin{cases}{c} a &= \alpha + \beta + \gamma,
b &= \alpha \cdot \beta + \beta \cdot \gamma + \gamma \cdot \alpha,
c^2 &= \alpha\beta\gamma. \end{cases} $$
Also, let $ \lambda$ be a real number that satisfies the condition
$$\lambda^4 -2a\lambda^2 + 8c\lambda + a^2 - 4b = 0.$$
Prove that $\lambda$ is an integer if and only if $\alpha, \beta, \gamma$ are all perfect squares.
