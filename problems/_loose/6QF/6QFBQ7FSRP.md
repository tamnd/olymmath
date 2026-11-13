---
tag: 6QFBQ7FSRP
kind: problem
type: answer
answer: "0.60"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=94101
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a certain region, the electricity price last year was 0.80 yuan/(kW・h), and the annual electricity consumption was $a$ kW・h. This year, the plan is to reduce the electricity price to between 0.55 yuan/(kW - h) and 0.75 yuan/(kW・h), while the user's expected electricity price is 0.40 yuan/(kW・h).

After calculation, the additional electricity consumption after the price reduction is inversely proportional to the difference between the actual electricity price and the user's expected electricity price (the proportionality constant is $k$), and the cost of electricity in the region is 0.30 yuan/(kW・h).
(1) Write the function relationship between the power department's revenue $y$ and the actual electricity price $x$ after the electricity price is reduced this year;
(2) Let $k=0.2 a$, what is the minimum electricity price that can still ensure that the power department's revenue increases by at least 20% compared to last year?
