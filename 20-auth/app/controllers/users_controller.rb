class UsersController < ApplicationController


  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      # byebug
      start_session(@user.id)
      flash[:message] = "You are registered!"
      redirect_to colors_path
    else
      flash[:errors] = @user.errors.full_messages
      redirect_to new_user_path
    end
  end 

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end

end