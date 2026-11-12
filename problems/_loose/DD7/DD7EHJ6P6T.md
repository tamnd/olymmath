---
tag: DD7EHJ6P6T
kind: problem
type: answer
answer: "19"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=21453
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are 30 people in the bar. The bartender knows that among them, there are 10 knights (who always tell the truth), 10 liars (who always lie), and 10 troublemakers. The bartender can ask person $X$ about person $Y$: "Is it true that $Y$ is a troublemaker?" If $X$ is not a troublemaker, they will answer the question, but if $X$ is a troublemaker, they will throw $Y$ out of the bar in response. The bartender can kick out anyone they want, but their goal is to get rid of the troublemakers and leave as many peaceful customers in the bar as possible. How should he proceed? Don't forget to prove that he cannot leave more peaceful customers.
