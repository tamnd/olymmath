---
tag: 2ZFWMSJ11S
kind: problem
type: answer
answer: "780"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=20466
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In the country of Aviania, there are 40 cities, some of which are connected by two-way flights. Moreover, between any two cities, there is only one reasonable air route (i.e., a route where the same flight is not used in different directions).

For each city, the air distance to the capital was calculated. It is calculated as the minimum number of flights required to fly from this city to the capital. For any two cities A and B connected by a flight, the cost of a ticket from city A to city B (and vice versa) in marks is equal to the maximum of the air distances from A and B to the capital. In particular, a ticket to the capital from any city connected to it by a direct flight costs 1 mark; all other flights departing from these cities cost 2 marks, and so on.

Petya traveled a lot in Aviania (not only by plane) and at the end of the year, it turned out that he used each air route exactly once (i.e., for any two cities A and B connected by a direct flight, he flew either from A to B or from B to A, but only in one of these directions). What is the maximum number of marks he could have spent on air travel?
