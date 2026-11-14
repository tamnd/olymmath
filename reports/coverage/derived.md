# Match rate of the derived datasets

This report is made by `om matchrate -derived` (spec 05.4 and 06.5). It reads every seed row of the datasets that the source register marks `derived: true`: rows copied from other sources, sometimes changed or written by a model (spec 05.1). A seed row is matched by key (K) when its competition, year and position give an appearance that has a record. It is matched by link when its capture (the file and the row of the dataset) is a statement of a record: an import took the row into that record. Else it is compared by E, the cosine of the TF-IDF weights of the words and TeX, with the canonical statements of the records. A row whose nearest record has E of at least 0.7 is matched, unless the row and the record both have an answer and the answers differ after a light normalization (signal A). Such a row is a variant: it can be another problem, or the same answer in another form, so a person must look at it. A row with E from 0.5 to 0.7 is near, and a person must look at it too. The other rows are new. New rows of one dataset that have E of at least 0.7 with each other are one new problem, so a problem that the dataset has in several rows counts once. The new texts count each text of the new rows once.

Each row is matched twice: against the 41678 placed records (with an appearance in a competition), and against all 181688 records with a statement, the loose records under problems/_loose included. The weights of the words come from all the records in both cases.

The exit of milestone 6 asks for less than 1% new problems for each 10,000 rows, that is less than 100 new problems for each 10,000 rows of a dataset. The exit uses the rate against all the records.

9 of 9 datasets give 100 or more new problems for each 10,000 rows against all the records: hf-numinamath-1-5, hf-omni-math, hf-olympiadbench, hf-openmathreasoning, hf-nemotron-math-proofs, hf-nemotron-math-v2, hf-aops-instruct, hf-liveaopsbench, hf-polymath. The exit does not hold yet.

## New problems for each 10,000 rows

| Dataset | Rows | Against the placed records | Against all the records |
|---|---:|---:|---:|
| hf-numinamath-1-5 | 315736 | 5921 | 1630 |
| hf-omni-math | 4428 | 2638 | 1217 |
| hf-olympiadbench | 2133 | 5073 | 3127 |
| hf-openmathreasoning | 5112697 | 437 | 378 |
| hf-nemotron-math-proofs | 1376663 | about 3075 | about 2873 |
| hf-nemotron-math-v2 | 14171678 | 161 | 150 |
| hf-aops-instruct | 1198115 | about 4897 | about 4063 |
| hf-liveaopsbench | 5328 | 7740 | 6051 |
| hf-polymath | 9000 | 4919 | 4482 |
| All | 22195778 | about 748 | about 607 |

A number with "about" is an estimate. The new texts of the dataset need too much memory for the groups, so the groups are counted in a sample: the new texts with the smallest hashes, as many as fit in the memory. The groups of the sample are then scaled to all the new texts. The estimate can be too high, because a problem with many texts loses fewer of its texts to the sample. The groups of the sample alone can be too low. The samples are:

- hf-nemotron-math-proofs against the placed records: 381435 groups in a sample of 477626 of the 530046 new texts.
- hf-nemotron-math-proofs against all the records: 383215 groups in a sample of 473893 of the 489024 new texts.
- hf-aops-instruct against the placed records: 275369 groups in a sample of 346201 of the 737629 new texts.
- hf-aops-instruct against all the records: 265036 groups in a sample of 327643 of the 601779 new texts.

## Against the placed records

| Dataset | Rows | Matched | By key | By link | Variants | Near | New rows | New rate | New texts | New problems | New per 10,000 rows | New with a competition |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| hf-numinamath-1-5 | 315736 | 41980 | 0 | 24846 | 1908 | 35186 | 236662 | 74.96% | 236647 | 186940 | 5921 | 0 |
| hf-omni-math | 4428 | 2586 | 0 | 0 | 223 | 384 | 1235 | 27.89% | 1217 | 1168 | 2638 | 604 |
| hf-olympiadbench | 2133 | 523 | 0 | 0 | 23 | 199 | 1388 | 65.07% | 1388 | 1082 | 5073 | 0 |
| hf-openmathreasoning | 5112697 | 296869 | 0 | 0 | 29204 | 779663 | 4006961 | 78.37% | 402688 | 223648 | 437 | 0 |
| hf-nemotron-math-proofs | 1376663 | 24413 | 0 | 0 | 0 | 109488 | 1242762 | 90.27% | 530046 | about 423298 | about 3075 | 0 |
| hf-nemotron-math-v2 | 14171678 | 300168 | 0 | 0 | 27944 | 1172760 | 12670806 | 89.41% | 292838 | 228576 | 161 | 0 |
| hf-aops-instruct | 1198115 | 90086 | 0 | 0 | 0 | 172756 | 935273 | 78.06% | 737629 | about 586712 | about 4897 | 0 |
| hf-liveaopsbench | 5328 | 255 | 0 | 0 | 52 | 823 | 4198 | 78.79% | 4194 | 4124 | 7740 | 0 |
| hf-polymath | 9000 | 1347 | 0 | 0 | 79 | 1152 | 6422 | 71.36% | 6420 | 4427 | 4919 | 0 |
| All | 22195778 | 758227 | 0 | 24846 | 59433 | 2272411 | 19105707 | 86.08% | 2213067 | about 1659975 | about 748 | 604 |

## Against all the records

| Dataset | Rows | Matched | By key | By link | Variants | Near | New rows | New rate | New texts | New problems | New per 10,000 rows | New with a competition |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| hf-numinamath-1-5 | 315736 | 200261 | 0 | 154487 | 10781 | 44833 | 59861 | 18.96% | 59861 | 51464 | 1630 | 0 |
| hf-omni-math | 4428 | 3051 | 0 | 0 | 323 | 501 | 553 | 12.49% | 550 | 539 | 1217 | 368 |
| hf-olympiadbench | 2133 | 711 | 0 | 0 | 92 | 438 | 892 | 41.82% | 892 | 667 | 3127 | 0 |
| hf-openmathreasoning | 5112697 | 440847 | 0 | 0 | 113767 | 1264652 | 3293431 | 64.42% | 342185 | 193194 | 378 | 0 |
| hf-nemotron-math-proofs | 1376663 | 50774 | 0 | 0 | 0 | 199928 | 1125961 | 81.79% | 489024 | about 395451 | about 2873 | 0 |
| hf-nemotron-math-v2 | 14171678 | 482672 | 0 | 0 | 136864 | 2119236 | 11432906 | 80.67% | 266863 | 212259 | 150 | 0 |
| hf-aops-instruct | 1198115 | 176402 | 0 | 0 | 0 | 269729 | 751984 | 62.76% | 601779 | about 486789 | about 4063 | 0 |
| hf-liveaopsbench | 5328 | 677 | 0 | 0 | 125 | 1250 | 3276 | 61.49% | 3272 | 3224 | 6051 | 0 |
| hf-polymath | 9000 | 1725 | 0 | 0 | 145 | 1653 | 5477 | 60.86% | 5475 | 4034 | 4482 | 0 |
| All | 22195778 | 1357120 | 0 | 154487 | 262097 | 3902220 | 16674341 | 75.12% | 1769901 | about 1347621 | about 607 | 368 |

## Why the new rows have no record

For each row that is new against all the records, the reason that the loose import (`om import -loose`) made no record of it: the check that dropped the row, "held for a review" for a row that the import left for a review (reports/review/loose-held.tsv), "dataset not read by the loose import" for a dataset that the loose import does not read, and "passed the checks" for a row that passed the checks. Such a row can be one that the import linked or joined by its other signals, or a new problem. The removed rows are in registers/loose-removed.tsv.

| Reason | hf-numinamath-1-5 | hf-omni-math | hf-olympiadbench | hf-openmathreasoning | hf-nemotron-math-proofs | hf-nemotron-math-v2 | hf-aops-instruct | hf-liveaopsbench | hf-polymath | All |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| dataset not read by the loose import | 0 | 553 | 892 | 3293431 | 1125961 | 11432906 | 751984 | 3276 | 5477 | 16614480 |
| not an olympiad set | 19271 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 19271 |
| needs a figure | 14714 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 14714 |
| held for a review | 7039 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 7039 |
| refers to another problem | 3007 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 3007 |
| passed the checks | 2364 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2364 |
| not a statement | 2238 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2238 |
| removed by a review | 1524 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1524 |
| names its position | 1450 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1450 |
| several problems | 1143 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1143 |
| broken TeX | 1050 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1050 |
| solution only | 983 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 983 |
| formulas lost | 978 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 978 |
| too short | 836 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 836 |
| a shortlist or longlist row | 762 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 762 |
| physics or chemistry | 626 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 626 |
| unknown language | 528 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 528 |
| links to a page | 243 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 243 |
| economics or finance | 233 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 233 |
| a theorem of a book | 210 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 210 |
| request | 118 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 118 |
| too long | 118 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 118 |
| a template | 100 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 100 |
| table of contents | 88 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 88 |
| names a link-only competition | 81 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 81 |
| has a position | 74 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 74 |
| a task of informatics | 37 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 37 |
| a grading scheme or a note | 29 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 29 |
| stub | 17 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 17 |
