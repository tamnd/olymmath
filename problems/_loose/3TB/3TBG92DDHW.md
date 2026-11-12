---
tag: 3TBG92DDHW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2013 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h516642
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=10064
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2013
    source: hf-ai-mo-aops
    label: 2013 Online Math Open Problems
---
Let $M$ be a positive integer. At a party with 120 people, 30 wear red hats, 40 wear blue hats, and 50 wear green hats. Before the party begins, $M$ pairs of people are friends. (Friendship is mutual.) Suppose also that no two friends wear the same colored hat to the party.

During the party, $X$ and $Y$ can become friends if and only if the following two conditions hold:

- There exists a person $Z$ such that $X$ and $Y$ are both friends with $Z$ . (The friendship(s) between $Z,X$ and $Z,Y$ could have been formed during the party.)
- $X$ and $Y$ are not wearing the same colored hat.

Suppose the party lasts long enough so that all possible friendships are formed. Let $M_1$ be the largest value of $M$ such that regardless of which $M$ pairs of people are friends before the party, there will always be at least one pair of people $X$ and $Y$ with different colored hats who are not friends after the party. Let $M_2$ be the smallest value of $M$ such that regardless of which $M$ pairs of people are friends before the party, every pair of people $X$ and $Y$ with different colored hats are friends after the party. Find $M_1+M_2$ .

*Victor Wang*
