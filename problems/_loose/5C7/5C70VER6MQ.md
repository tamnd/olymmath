---
tag: 5C70VER6MQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=265402
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Maggie Waggie organizes a pile of 127 calculus tests in alphabetical order, with Joccy Woccy's test being 64th in the pile. While Maggie isn't looking, Joccy walks over and randomly scrambles the entire pile of tests. When Maggie returns, she is oblivious to the fact that Joccy has tampered with the list. She uses a binary search algorithm to find Joccy's test, where she looks at the test in the middle of the pile. If the test is not Joccy's, she binary searches the top half of the list if the test appears after Joccy's name when arranged alphabetically, or the bottom half of the list otherwise. The probability that Maggie finds Joccy's test can be expressed as $\frac{p}{q}$. Compute $p+q$.

*2022 CCA Math Bonanza Team Round #5*
