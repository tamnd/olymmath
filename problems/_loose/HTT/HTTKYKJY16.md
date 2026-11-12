---
tag: HTTKYKJY16
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Stanford Mathematics Tournament
    url: https://artofproblemsolving.com/community/c6h3130971
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=74166
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: smt/2023
    source: hf-ai-mo-aops
    label: 2023 Stanford Mathematics Tournament
---
Consider an equilateral triangle $\vartriangle ABC$ of side length $4$ . In the zeroth iteration, draw a circle $\Omega_0$ tangent to all three sides of the triangle. In the first iteration, draw circles $\Omega_{1A}$ , $ \Omega_{1B}$ , $\Omega_{1C}$ such that circle $\Omega_{1v}$ is externally tangent to $\Omega_0$ and tangent to the two sides that meet at vertex $v$ (for example, $\Omega_{1A}$ would be tangent to $\Omega_0$ and sides $AB$ , $AC$ ). In the nth iteration, draw circle $\Omega_{n,v}$ externally tangent to $\Omega_{n-1,v}$ and the two sides that meet at vertex $v$ . Compute the total area of all the drawn circles as the number of iterations approaches infinity.
