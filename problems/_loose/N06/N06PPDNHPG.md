---
tag: N06PPDNHPG
kind: problem
type: answer
answer: 2n\geq2M+L
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=91352
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n \geq 2$ be a natural number. There is a watchtower in the center of a circular garden. At the edge of the garden are $n$ evenly distributed garden gnomes. Attentive guards live on the watchtower. Each guard monitors an area of the garden that is bordered by two different garden gnomes.

We say that guard $A$ controls guard $B$ if the entire territory of $B$ is contained in that of $A$.

There are two groups of guards: Apprentices and Masters. Each apprentice is controlled by exactly one master and does not control anyone, while masters are not controlled by anyone.

The whole garden has maintenance costs:

- An apprentice costs 1 gold piece per year.
- A master costs 2 gold pieces per year.
- A garden gnome costs 2 gold pieces per year.

Show that the garden gnomes cost at least as much as the guards.
