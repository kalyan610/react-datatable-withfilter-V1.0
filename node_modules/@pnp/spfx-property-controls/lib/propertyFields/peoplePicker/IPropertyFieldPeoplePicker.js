/**
 * PrincipalType controls the type of entities that are returned in the results.
 * Choices are All - 15, Distribution List - 2 , Security Groups - 4, SharePoint Groups - 8, User - 1.
 * These values can be combined (example: 13 is security + SP groups + users)
 */
export var PrincipalType;
(function (PrincipalType) {
    /**
     * Users
     */
    PrincipalType[PrincipalType["Users"] = 1] = "Users";
    /**
     * Security Group
     */
    PrincipalType[PrincipalType["Security"] = 4] = "Security";
    /**
     * SharePoint Group
     */
    PrincipalType[PrincipalType["SharePoint"] = 8] = "SharePoint";
})(PrincipalType || (PrincipalType = {}));
//# sourceMappingURL=IPropertyFieldPeoplePicker.js.map