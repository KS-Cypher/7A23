import seaborn as sns
import matplotlib.pyplot as plt

# Create a correlation matrix
corr = titanic.corr()

# Create a heatmap of the correlation matrix
sns.heatmap(corr, cmap='coolwarm', annot=True)
plt.title('Correlation Matrix for Titanic Dataset')
plt.show()