---
tag: WG4H4BQ9WT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=235841
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Martin invented the following algorithm. Let two irreducible fractions $ \frac{s_1}{t_1}$ and $ \frac{s_2}{t_2}$ be given as inputs, with the numerators and denominators being positive integers. Divide $ s_1$ and $ s_2$ by their greatest common divisor $ c$ and obtain $ a_1$ and $ a_2$, respectively. Similarily, divide $ t_1$ and $ t_2$ by their greatest common divisor $ d$ and obtain $ b_1$ and $ b_2$, respectively. After that, form a new fraction $ \frac{a_1b_2 + a_2b_1}{t_1b_2}$, reduce it, and multiply the numerator of the result by $ c$. Martin claims that this algorithm always finds the sum of the original fractions as an irreducible fraction. Is his claim correct?
