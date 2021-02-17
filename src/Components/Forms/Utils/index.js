
export const showFieldError = (error) => {
    if (error){
        return { error: true, helperText: error?.message }
    }
    return { error: false };
}